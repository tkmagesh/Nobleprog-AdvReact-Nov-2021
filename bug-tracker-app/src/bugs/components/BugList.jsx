import BugItem from './BugItem';

const BugList = ({bugs, toggle, remove, removeClosed}) => {
    const bugsList = bugs.map(bug => (
        <BugItem key={bug.id} {...{bug, toggle, remove}}/>   
    ));
    return (
        <section className="list">
            <ol>
                {bugsList}
            </ol>
            {bugs.length ? (<button onClick={() => removeClosed(bugs)}>Remove Closed</button>) : null }
        </section>
    )
};

export default BugList;