import React from 'react';
import React_Dom from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ToDoList from './components/todo-list';

const root = document.getElementById('root');

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
