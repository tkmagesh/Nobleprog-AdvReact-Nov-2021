import React from 'react';

const BugItem = ({bug, remove, toggle}) => {
    return (
            <li >
            <span className={"bugname " + (bug.isClosed ? 'closed' : '')} onClick={() => toggle(bug)}>
                {bug.name}
            </span>
            <small> [ {bug.project} ] </small>
            <div className="datetime">{bug.createdAt.toString()}</div>
            <button onClick={() => remove(bug)}>Remove</button>
        </li>
    )
}


export default React.memo(BugItem);