
import axios from 'axios';

import bugApi from '../services/bugApi';

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

//using the asyncMiddleware
/* 
//returns a function (handled by the asyncMiddleware)
const load = () => {
    return function(dispatch){
        //asynchronous
        axios.get('http://localhost:3030/bugs')
            .then(response => response.data)
            .then(bugs => {
                console.table(bugs);
                const action = { type : 'BUGS_LOAD', payload : bugs}
                dispatch(action);
            });
    }
} 
*/

//returns a promise - handled by the promiseMiddleware
/* 
const load = () => {
    return axios.get('http://localhost:3030/bugs')
        .then(response => response.data)
        .then(bugs => {
            const action = { type : 'BUGS_LOAD', payload : bugs}
            return action;
        });
} 
*/

//returns a promise - handled by the promiseMiddleware
/* const load = async () => {
    const response = await axios.get('http://localhost:3030/bugs');
    const action = { type : 'BUGS_LOAD', payload : response.data};
    return action;
} */

//returns a promise - handled by the promiseMiddleware
//using bugApi
const load = async () => {
    const bugs = await bugApi.getAll();
    const action = { type : 'BUGS_LOAD', payload : bugs};
    return action;
}

export default load;