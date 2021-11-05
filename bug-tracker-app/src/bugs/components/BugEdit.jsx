import {useState} from 'react';

const BugEdit = ({addNew, projects}) => {
    const [newBugName, setNewBugName] = useState('');
    const [selectedProject, setSelectedProject] = useState(0);
    const onBtnCreateClick = () => {
        addNew(newBugName, selectedProject);
        setNewBugName('');
    };
    return (
            <section className="edit">
            <label htmlFor="">Bug Name : </label>
            <input type="text" onBlur={evt => setNewBugName(evt.target.value)} />
            <label>Project : </label>
            <select onChange={ evt => setSelectedProject(parseInt(evt.target.value))}>
                <option value="">Select Project</option>
                {projects.map(project => <option key={project.id} value={project.id}>{project.name}</option>)}
            </select>
            <button onClick={() => onBtnCreateClick()}>Create New</button>
        </section>
    )
};

export default BugEdit;