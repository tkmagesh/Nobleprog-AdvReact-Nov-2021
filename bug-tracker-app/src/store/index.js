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

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default store;