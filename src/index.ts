import './style.css';
import style from './style.module.css';

const labelFirst = document.createElement('label');
labelFirst.textContent = 'labelFirst';
const labelSecond = document.createElement('label');
labelSecond.textContent = 'labelSecond';
const labelThird = document.createElement('label');
labelThird.textContent = 'labelThird';

labelFirst.classList.add(style.green);
labelSecond.classList.add(style.red);
labelThird.classList.add('blue');

document.body.append(labelFirst, labelSecond, labelThird);