import React from 'react';
import React_Dom from 'react-dom';

const root = document.getElementById('root');

const el = (
    <div>
        <h1>My ToDo List</h1>
        <input placeholder='search'/>
        <ul>
            <li>Learn React</li>
            <li>Mack Awesome App</li>
        </ul>
    </div>
);

React_Dom.render(el, root);
