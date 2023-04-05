import './style.css';
import _ from 'date-fns'
import generateTitle from './title';

function component() {
  const element = document.createElement('div');
  

  element.classList.add('title');
  element.appendChild(generateTitle())
  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;

  // element.appendChild(btn);

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