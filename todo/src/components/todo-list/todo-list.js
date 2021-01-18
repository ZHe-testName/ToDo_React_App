import React from 'react';
import ToDoListItem from '../todo-list-item/';

import './todo-list.css';

const ToDoList = ({todos}) => {
    const elments = todos.map(item => {
        //чтобы не передавать в елемент лишнее значение(id)
        //используем спред опрератор стобы отделить его от знгачений
        //еоторые непосредственно нужны для компонента.
        //Хотя если в логике компонента оно не используется
        //то в этом нет ничего страшного, оно просто проигнорируется
        //это сделано для чистоты кода
        const {id, ...todosItem} = item;

        return (
            <li key={id} className='list-group-item'>
                <ToDoListItem {...todosItem} />
            </li>
        );
    });
    return (
        <ul className='list-group todo-list'>
            {elments}
        </ul>
    );
};

export default ToDoList;