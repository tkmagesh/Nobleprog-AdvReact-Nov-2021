
import axios from 'axios';

function getLocalBugs(){
    return [
        {
            id: 1,
            createdAt : new Date('2018-01-15'),
            isClosed : false,
            name: '[local] Error in console when clicking Add',
            projectId : 1
        },
        {
            id: 2,
            isClosedAt : true,
            createdAt: new Date('2018-01-16'),
            name: '[local] Missing bottom border on panel',
            projectId : 2
        }
    ]
}

const load = () => {
    
    axios.get('http://localhost:3030/bugs')
        .then(response => response.data)
        .then(bugs => console.table(bugs))

    const bugs = getLocalBugs();
    const action = { type : 'BUGS_LOAD', payload : bugs}
    return action;
}

export default load;