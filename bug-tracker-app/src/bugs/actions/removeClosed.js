
const removeClosed = (bugs /* TOBE FIXED */) => {
    const bugsToRemove = bugs.filter(bug => bug.isClosed)
    const action = { type : 'BUGS_REMOVE_MANY', payload : bugsToRemove};
    return action;
}

export default removeClosed;