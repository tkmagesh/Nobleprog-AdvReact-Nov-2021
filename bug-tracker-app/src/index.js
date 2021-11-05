import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { bindActionCreators } from 'redux';
import bugActionCreators from './bugs/actions';
import store from './store';
import Bugs from './bugs';
import Projects from './projects';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);

function renderApp(){
    const storeState = store.getState(); // => { bugState : [], projectState : [] }
    const bugs = storeState.bugState;
    const projects = storeState.projectState;
    ReactDOM.render(
      <div>
        <h1>Bug Tracker</h1>
        <Projects projects={projects} />
        <Bugs bugs={bugs} {...bugActionDispatchers} /> 
      </div>
        , document.getElementById('root')
    )
}
renderApp();
store.subscribe(renderApp);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
