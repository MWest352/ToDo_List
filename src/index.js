import './Styling/style.css';
import _ from 'date-fns'
import titleSection from './title';
import overlay from './checklistForm';

function component() {
  const element = document.createElement('div');
  

  element.classList.add('title');
  element.appendChild(titleSection());
  

  return element;
}

document.body.appendChild(component());
