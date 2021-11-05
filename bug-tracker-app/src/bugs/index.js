import BugStats from './components/BugStats';
import BugSort from './components/BugSort';
import BugEdit from './components/BugEdit';
import BugList from './components/BugList';

const Bugs = ({bugs, addNew, toggle, remove, removeClosed}) => {
    return (
        <>
            <BugStats bugs={bugs} />
            <BugEdit addNew={addNew} />
            <BugSort/>
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </>
    )
};

export default Bugs;