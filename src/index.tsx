import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let entries = [
  {title: "Шекспиры", participants: ["Агринская Александра", "Ванькова Настя", "Герасимов Георгий", "Горбачев Дмитрий", "Ерегина Оксана", "Кострукова Светлана", "Оганесян Лусинэ", "Полонникова Юля", "Сиротова Екатерина", "Скубченко Дарья", "Ходарева Валентина", "Хроль Оксана"]},
  {title: "Body Percussion Time", participants: ["Божко Илона", "Божко Игорь", "Горбунов Андрей", "Зверева Татьяна", "Кострукова Светлана", "Савченко	Александра", "Шагин Вадим", "Шагина	Тамара"]},
  {title: "Ванькова Настя", participants: ["Ванькова Настя"]},
  {title: "Respect the Dance", participants:["Горбунов Андрей", "Смотрицкая Ольга"]},
  {title: "Ходарева Валя и Ко", participants: ["Кострукова Света", "Руснак Аня", "Фомина Аня", "Ходарева Валя"]},
  {title: "Flying Home", participants: ["Горбачев	Дмитрий", "Киселёва Анастасия", "Корсиков Илья", "Кострукова Светлана", "Степанова Анна", "Тархов Игорь", "Шагин Вадим", "Шагина Тамара"]},
  {title: "Humans", participants: ["Ванькова Анастасия", "Герасимов Георгий", "Горбачев Дмитрий", "Ефремкина Анна", "Илюкович Илья", "Кузема Артем", "Масловская Екатерина", "Мытник Юлия", "Оганесян Лусинэ", "Репина Екатерина", "Ходарева Валентина", "Хроль Оксана", "Шибалева Анастасия"]}
];

ReactDOM.render(
  <React.StrictMode>
    <App entries = {entries} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
