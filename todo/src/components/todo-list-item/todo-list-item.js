import React from 'react';
import './todo-list-item.css';

//Используем спан чтобы сделать компонет более независимым
//и использовать его не только в ul(елси нужно конечно)
const ToDoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (<span className='todo-list-item'>
                <span 
                    className='todo-list-item-label'
                    style={style}>{label}</span>

                <button
                    className='btn btn-outline-success btm-sm'>
                        <i className='fa fa-exclamation'></i>
                </button>

                <button
                    className='btn btn-outline-danger btm-sm'>
                        <i className='fa fa-trash-o'></i>
                </button>
            </span>);
}; 

export default ToDoListItem;