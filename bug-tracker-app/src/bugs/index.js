import BugStats from './components/BugStats';
import BugSort from './components/BugSort';
import BugEdit from './components/BugEdit';
import BugList from './components/BugList';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import bugActionCreators from './actions';

const Bugs = () => {
    
    //extracting the state for the presentational components
    const bugs = useSelector(storeState => storeState.bugState);
    const projects = useSelector(storeState => storeState.projectState);
    const bugsView = bugs.map(bug => ({...bug, project : projects.find(project => project.id === bug.projectId).name}))

    //creating the action dispatchers
    const dispatch = useDispatch();
    const { addNew, toggle, remove, removeClosed } = bindActionCreators(bugActionCreators, dispatch);
    return (
        <>
            <h3>Bugs</h3>
            <BugStats bugs={bugsView} />
            <BugEdit addNew={addNew} projects={projects}/>
            <BugSort/>
            <BugList {...{bugs : bugsView, toggle, remove, removeClosed}} />
        </>
    )
};

export default Bugs;