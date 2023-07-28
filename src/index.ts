import style from './style.module.css';

const labelFirst = document.createElement('label');
labelFirst.textContent = 'labelFirst';
const labelSecond = document.createElement('label');
labelSecond.textContent = 'labelSecond';

labelFirst.classList.add(style.green);
labelSecond.classList.add(style.red);

document.body.append(labelFirst, labelSecond);