import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projectsReducer'

const rootReducer = combineReducers({
    bugState : bugsReducer,
    projectState : projectsReducer
});

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
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware, promiseMiddleware));

export default store;