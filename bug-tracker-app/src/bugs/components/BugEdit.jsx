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
            <button onClick={() => onBtnCreateClick(newBugName)}>Create New</button>
        </section>
    )
};

export default BugEdit;