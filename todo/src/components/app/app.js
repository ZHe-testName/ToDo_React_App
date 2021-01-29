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
            this.createToDoItem('Drink Coffe'),
            this.createToDoItem('Make Awesome App'),
            this.createToDoItem('Have a lunch')
        ]
    }

    createToDoItem(label){
        return {
            label: label,
            done: false,
            important: false,
            id: this.minId++
        };
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
        const newItem = this.createToDoItem(text);

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

    toggleProperty(arr, id, propName){
        const index = arr.findIndex(el => el.id === id);

            //мы не можем изменять стейт на прямую
            //в место етого мы создаем такой же
            //только с измененным свойством
            const oldItem = arr[index];
            const newItem = {...oldItem, [propName]: !oldItem[propName]};

            //создаем новы массив и
            //вставляем его на место 
            //предидущего айтема в наш стейт
            return [
                ...arr.slice(0, index),
                newItem,
                ...arr.slice(index + 1)
            ];
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    }

    render(){
        const {todoData} = this.state;

        const doneItemsCount = todoData
                                        .filter(el => el.done)
                                        .length;

        const doItemsCount = todoData.length - doneItemsCount;
        return (
            <div className='todo-app'>
                <AppHeader toDo={doItemsCount} done={doneItemsCount} />
                <div className='top-panel d-flex'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                
                <ToDoList 
                    todos={todoData}
                    deleteToDoItem={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone} />

                <ItemAddForm
                    createToDoItem={this.createItem} />
            </div>
        );
    }
};