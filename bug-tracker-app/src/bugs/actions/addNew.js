
let currentBugId = 0;

const addNew = (bugName, projectId) => {
    const newBug = {
        id : ++currentBugId,
        name : bugName,
        isClosed : false,
        projectId : projectId,
        createdAt : new Date()
    };
    const action = { type : 'BUGS_ADD_NEW', payload : newBug};
    return action;
};

export default addNew;