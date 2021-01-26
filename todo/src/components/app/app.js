import React, {Component} from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import ToDoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';
import ItemAddForm from '../item-add-form/';

import './app.css';

export default class App extends Component{

    minId = 100;

    state = {
        todoData: [
            {label: 'Drink Coffe', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
    }

    deleteItem = (id) => {
        //ВАЖНО!!!!

        //НИ В КОЕМ СЛУЧАЕ НЕЛЬЗЯ ИЗМЕНЯТЬ ПРЕДИДУЩИЙ STATE!!!
        //Использовать только способы и методы которые не изменяют предидущего состояния
        
        //...и если наш результат опирается на предидущтй стейт 
        //то нужно в setState передавать функцию а не объект
        this.setState(({todoData}) => {
            const index = todoData.findIndex(el => el.id === id);
            
            const resArray = [
                ...todoData.slice(0, index),
                ...todoData.slice(index + 1)
            ];

            return {
                todoData: resArray
            }
        }); 
    }

    createItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.minId++
        };

        this.setState(({todoData}) => {
            const newItemsArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newItemsArr
            };
        });
    }

    render(){
        return (
            <div className='todo-app'>
                <AppHeader toDo={1} done={3} />
                <div className='top-panel d-flex'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                
                <ToDoList 
                    todos={this.state.todoData}
                    deleteToDoItem={this.deleteItem} />

                <ItemAddForm
                    createToDoItem={this.createItem} />
            </div>
        );
    }
};