const StateManager = (function(){
    let _currentState = undefined,
        _subscribers = [],
        _reducer = undefined;

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        if (typeof callback === 'function'){
            _subscribers.push(callback);
        }
    }

    //private utility function
    function _notifySubscribers(){
        _subscribers.forEach(callback => callback());
    }

    function dispatch(action){
        let newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        _notifySubscribers();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function'){
            throw new Error('A reducer is mandatory to create the store');
        }
        _reducer = reducer;
        //initializing the current state with a VALID DEFAULT STATE
        _currentState = _reducer(undefined, {type: '@@INIT'}); 
        const store = { getState, subscribe, dispatch }
        return store;
    }

    function bindActionCreators(actionCreators, dispatch) {
        const actionDispatchers = {};
        for (let key in actionCreators) {
            actionDispatchers[key] = function(...args){
                const action = actionCreators[key](...args);
                dispatch(action);
            }
        }
        return actionDispatchers;
    }


    const stateManager = { createStore, bindActionCreators };
    return stateManager;
    
})()