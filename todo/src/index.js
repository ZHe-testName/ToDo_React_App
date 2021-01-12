import React from 'react';
import React_Dom from 'react-dom';

const root = document.getElementById('root');

const ToDoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Make Awesome App</li>
        </ul>
    );
};

const AppHeader = () => <h1>My ToDo List</h1>;

const SearchPanel = () => <input placeholder='search'/>;

const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <ToDoList/>
        </div>
    );
};

React_Dom.render(<App/>, root);
