

export default

function titleHeader() {
  const titleHeader = document.createElement('div');
 
  titleHeader.classList.add('title_header');
  titleHeader.innerHTML = "CHECKMARK";
  titleHeader.appendChild(runButton());
  titleHeader.appendChild(titleSubheader());
  titleHeader.appendChild(titleFooter());
  

  return titleHeader;
}


function titleSubheader() {
  const titleSubHeader = document.createElement('div');
 
  titleSubHeader.classList.add('title_header');
  titleSubHeader.innerHTML = "Welcome to Checkmark! Your new personal assistant!";

  return titleSubHeader;
}

function runButton() {
  const runbtn = document.createElement('button')
  runbtn.classList.add('runButton')
  runbtn.innerHTML = 'Start New Checklist';

  return runbtn;
}


function titleFooter() {
  const titleFooter = document.createElement('div');
 
  titleFooter.classList.add('title_header');
  titleFooter.innerHTML = "Footer";

  return titleFooter;
}