//Title section creation

export default

function titleSection() {
  const titleSection = document.createElement('div');
 
  titleSection.classList.add('title_section');
  titleSection.appendChild(titleHeader);
  titleSection.appendChild(newList);
  titleSection.appendChild(titleSubheader);
  titleSection.appendChild(titleFooter);
  
  return titleSection;
}

//DIV GENERATOR WITH CLASSNAME AND TEXT
function createTitle(text, className) {
  const title = document.createElement('div');
  title.classList.add(className);
  title.innerHTML = text;

  return title;
}

//DIV CREATION
const titleHeader = createTitle("Checkmark!", "title_header");
const titleSubheader = createTitle("Welcome to Checkmark, your new personal assistant!", "title_subheader");
const newList = createTitle("Start New Checklist!", "title_subheader");
const titleFooter = createTitle("Footer", "title_footer");