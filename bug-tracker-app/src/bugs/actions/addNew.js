
import bugApi from '../services/bugApi';

const addNew = async (bugName, projectId) => {
    const newBugData = {
        id : 0,
        name : bugName,
        isClosed : false,
        projectId : projectId,
        createdAt : new Date()
    };
    const newBug = await bugApi.save(newBugData);
    const action = { type : 'BUGS_ADD_NEW', payload : newBug};
    return action;
};

export default addNew;