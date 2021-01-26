import React, {Component} from 'react';
import './todo-list-item.css';

//Используем спан чтобы сделать компонет более независимым
//и использовать его не только в ul(елси нужно конечно)
// const ToDoListItemFunc = ({label, important = false}) => {
//     const style = {
//         color: important ? 'steelblue' : 'black',
//         fontWeight: important ? 'bold' : 'normal'
//     };

//     return (<span className='todo-list-item'>
//                 <span 
//                     className='todo-list-item-label'
//                     style={style}>{label}</span>

//                 <div>
//                     <button
//                         className='btn btn-outline-success btm-sm'>
//                             <i className='fa fa-exclamation'></i>
//                     </button>

//                     <button
//                         className='btn btn-outline-danger btm-sm'>
//                             <i className='fa fa-trash-o'></i>
//                     </button>
//                 </div>
//             </span>);
// }; 

//если компонент длжен хрпнить какие то внутренние состояния
//то компоненты-функции нам уже не подойдут
//в Реакте для обявления таких компонентов используеться 
//синтаксис классов
export default class ToDoListItem extends Component{
    //способ который входит в стандарт
    // constructor(){
    //     super();

    //     this.clickOnLabel = () => console.log(`Done: ${this.props.label}`);
    // }

    //пропоузел который пока не является частю стандарта(Поля Класса)

    // State — состояние компонента. 
    // > Состояние хранится в поле state (объект со свойствами)
    // > this.state инициализируется в конструкторе или в теле класса
    // > После инициализации state изменять нельзя (только читать)
    // > Чтобы обновить state используют setState
    state = {
        done: false,
        important: false
    }

    clickOnLabel = () => {
        //Как работает setState() — в setState() нужно 
        //передавать только изменения state (функция обновляет только конкретную часть состояния)
        //setState() это асинхронная функция и возможны случаи
        //когда она может отрабатывать не корректно
        //такое асинхронное поведение setState связано с внутренними оптимизациями Реакта

        //чтобы этого избежать нужно передать в setState функцию вместо объекта
        //в качестве аргумента
        //а в этот колбек принимает объект state

        //это своего рода сигнал для Реакт что обновить state 
        //ножно только когда он будет в своем завершенном состоянии

        //Объект state можно сразу же диструктурировать
        //и извлекать нужные переменные
        this.setState(({done}) => {
            return {
                done: !done
            }
        });
    }

    clickOnImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        });
    };

    render(){
        const {label, onDeleted} = this.props;
        const {done, important} = this.state;

        let spanClassNameStr = 'todo-list-item';

        if (done){
            spanClassNameStr += ' done';
        };

        if (important){
            spanClassNameStr += ' important';
        }
    
        return (<span className={spanClassNameStr}>
                    <span 
                        className='todo-list-item-label'
                        //тут же добавляется к елементу обработчик событий
                        //в onClick можно сразу писать функцию обработчик
                        //но при использовании больших функций это очень не удобно
                        
                        //можно обявить функцию обработчик на прототипе класса
                        //но тогдв будет поблема потери this
                        //которую можно решить используя жесткую привязку bind
                        //но такой способ будет создавать привязки каждый раз
                        //когда мы кликаем по елементу

                        //избежать этого можно обявив обработчик собитий в конструкторе класса
                        //а не не пототипе
                        
                        //или использовать современные возможности языка
                        //которые еще не вошли в стандарт
                        //это свойство Class Fields(Поля Класса)
                        onClick={this.clickOnLabel}>{label}</span>
    
                    <div>
                        <button
                            className='btn btn-outline-success btm-sm'
                            onClick={this.clickOnImportant}>
                                <i className='fa fa-exclamation'></i>
                        </button>
    
                        <button
                            className='btn btn-outline-danger btm-sm'
                            onClick={onDeleted}>
                                <i className='fa fa-trash-o'></i>
                        </button>
                    </div>
                </span>);
    }
};
