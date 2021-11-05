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

    //creating the action dispatchers
    const dispatch = useDispatch();
    const { addNew, toggle, remove, removeClosed } = bindActionCreators(bugActionCreators, dispatch);
    return (
        <>
            <h3>Bugs</h3>
            <BugStats bugs={bugs} />
            <BugEdit addNew={addNew} />
            <BugSort/>
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </>
    )
};

export default Bugs;