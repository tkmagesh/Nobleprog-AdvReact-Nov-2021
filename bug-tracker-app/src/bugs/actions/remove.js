import bugApi from '../services/bugApi';

const remove = async (bugToRemove) => {
    await bugApi.remove(bugToRemove)
    const action = { type : 'BUGS_REMOVE', payload : bugToRemove};
    return action;
}

export default remove;