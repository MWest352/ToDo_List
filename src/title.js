//Title section creation

import createDivWithClass from "./divGenerator"

export default

function titleSection() {
  const titleSection = document.createElement('div');
 
  titleSection.classList.add('title_section');
  titleSection.appendChild(titleHeader);
  titleHeader.appendChild(titletext);
  titleSection.appendChild(newList);
  titleSection.appendChild(titleSubheader);
  titleSection.appendChild(titleFooter);
  
  return titleSection;
}

//Title sections with text generator
function createTitle(text, className) {
  const title = createDivWithClass(className);
  title.innerHTML = text;
  return title;
}

//DIV CREATION
const titleHeader = createTitle("", 'title_header');
const titletext = createTitle("Checkmark!", 'title_text')
const titleSubheader = createTitle("Welcome to Checkmark, your new personal assistant!", 'title_subheader');
const newList = createTitle("Start New Checklist!", 'title_subheader');
const titleFooter = createTitle("Footer", 'title_footer');