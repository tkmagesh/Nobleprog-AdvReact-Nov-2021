const remove = (bugToRemove) => {
    const action = { type : 'BUGS_REMOVE', payload : bugToRemove};
    return action;
}

export default remove;