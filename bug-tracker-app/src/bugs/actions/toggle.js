import bugApi from '../services/bugApi';

const toggle = async (bugToToggle) => {
    const toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
    const toggledBug = await bugApi.save(toggledBugData);
    const action = { type : 'BUGS_REPLACE', payload : toggledBug};
    return action;
}

export default toggle;