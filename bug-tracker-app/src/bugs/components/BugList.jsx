import BugItem from './BugItem';

const BugList = ({bugs, toggle, remove, removeClosed}) => {
    const bugsList = bugs.map(bug => (
        <BugItem key={bug.id} {...{bug, toggle, remove}}/>   
    ));
    return (
        <section className="list">
            <ol>
                {bugsList}
               {/*  <li >
                    <span className={"bugname"} onClick={() => {}}>
                        Bug - 1
                    </span>
                    <small>[project-name]</small>
                    <div className="datetime">{Date()}</div>
                    <button onClick={() => {}}>Remove</button>
                </li> */}
            </ol>
            {bugs.length ? (<button onClick={() => removeClosed(bugs)}>Remove Closed</button>) : null }
        </section>
    )
};

export default BugList;