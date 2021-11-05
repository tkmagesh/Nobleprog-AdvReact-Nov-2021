
let currentBugId = 0;

const addNew = (bugName) => {
    const newBug = {
        id : ++currentBugId,
        name : bugName,
        isClosed : false,
        createdAt : new Date()
    };
    const action = { type : 'BUGS_ADD_NEW', payload : newBug};
    return action;
};

export default addNew;