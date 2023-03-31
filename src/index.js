import './style.css';
// import _ from 'lodash';  LIBRARY IMPORTS HERE
import printMe from './print.js';


function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "Hello World"
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  // Add the image to our existing div.
  // const myChrist = new Image();
  // myChrist.src = BC;

  // element.appendChild(myChrist);

  // //DATA STUFFS (horrible comment I know)
  // console.log(Data);
  // console.log(Notes);

  return element;
}

document.body.appendChild(component());