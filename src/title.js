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
  titleFooter.appendChild(footerIcons);
  footerIcons.appendChild(fbIcon);
  footerIcons.appendChild(dscrdIcon);
  footerIcons.appendChild(ghIcon);
  footerIcons.appendChild(inIcon);
  footerIcons.appendChild(ytIcon);
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
const newList = createTitle("Start New Checklist!", 'title_start');
const titleFooter = createTitle("", 'title_footer');
const footerIcons = createTitle("", 'footer_icons');
const fbIcon = createTitle("", 'fb_icon');
const dscrdIcon = createTitle("", 'dscrd_icon');
const ghIcon = createTitle("", 'gh_icon');
const inIcon = createTitle("", 'in_icon');
const ytIcon = createTitle("", 'yt_icon');
