import {useState} from 'react';

const BugEdit = ({addNew}) => {
    const [newBugName, setNewBugName] = useState('');
    
    const onBtnCreateClick = () => {
        addNew(newBugName);
        setNewBugName('');
    };
    return (
            <section className="edit">
            <label htmlFor="">Bug Name : </label>
            <input type="text" value={newBugName} onChange={evt => setNewBugName(evt.target.value)} />
            <label>Project : </label>
            <select>
                <option value="">Select Project</option>
                {/* 
                Generate this using the project data from the store
                <option value="1">Project 1</option>
                <option value="2">Project 2</option>
                <option value="3">Project 3</option> 
                */}
            </select>
            <button onClick={() => onBtnCreateClick(newBugName)}>Create New</button>
        </section>
    )
};

export default BugEdit;