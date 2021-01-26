import React from 'react';
import ToDoListItem from '../todo-list-item/';

import './todo-list.css';

const ToDoList = ({todos, deleteToDoItem}) => {
    const elments = todos.map(item => {
        //чтобы не передавать в елемент лишнее значение(id)
        //используем спред опрератор стобы отделить его от знгачений
        //еоторые непосредственно нужны для компонента.
        //Хотя если в логике компонента оно не используется
        //то в этом нет ничего страшного, оно просто проигнорируется
        //это сделано для чистоты кода
        const {id, ...todosItem} = item;

        return (
            // Собственная система событий.
            // > Любой компонент может генерировать собственные события (onDone, onAdded…)
            // > Достаточно передать callback функцию как property, а затем вызвать её из компонента когда наступило событие
            // > Через события данные поднимаются "вверх" по иерархии компонентов

            //Компоненты передают информацию с низу в верх используя колбеки 
            //переданые в них из верхних компонентов
            <li key={id} className='list-group-item'>
                <ToDoListItem 
                    {...todosItem}
                    onDeleted={() => deleteToDoItem(id)} />
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