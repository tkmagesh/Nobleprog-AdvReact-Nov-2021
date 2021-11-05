import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projectsReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    bugState : bugsReducer,
    projectState : projectsReducer
});

//replace the following with 'redux-logger' middleware
function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.log('%c state', 'color: gray', store.getState());
            console.log(action);
            next(action);
            console.log('%c state', 'color: gray', store.getState());
            console.groupEnd();
        }
    }
}


//replace the following with 'redux-thunk' middleware
function asyncMiddleware(store){
    return function(next){
        return function(action){
            if (typeof action === 'function'){
                return action(store.dispatch, store.getState);
            }
            return next(action);
        }
    }
}

function promiseMiddleware(store){
    return function(next){
        return function(action){
            if (action instanceof Promise){
                action.then(actionObj => store.dispatch(actionObj))
                return;
            }
            return next(action);
        }
    }
}
const store = createStore(rootReducer, applyMiddleware(/* loggerMiddleware */ logger , /* asyncMiddleware */ thunk, promiseMiddleware));

export default store;