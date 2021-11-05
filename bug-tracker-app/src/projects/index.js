import { useSelector } from 'react-redux';

const Projects = () => {
    const projects = useSelector(storeState => storeState.projectState);
    return(
        <>
            <h3>Projects</h3>
            <ol>
                {projects.map(project => (
                    <li key={project.id}>
                        {project.name}
                    </li>
                ))}
            </ol>
        </>
    )
}

export default Projects;