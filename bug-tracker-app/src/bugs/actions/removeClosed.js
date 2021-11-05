import remove from './remove';

//using the asyncMiddleware
const removeClosed = () => {
    return function(dispatch, getState){
        const bugs = getState().bugState;
        const bugsToRemove = bugs.filter(bug => bug.isClosed)
        bugsToRemove.forEach(bug => dispatch(remove(bug)))
    }
}

export default removeClosed;