//Title section creation

import createDivWithClass from "./divGenerator"
import overlay from "./checklistForm"

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


//BUTTONS

//START NEW CHECKLIST
newList.addEventListener("click", function(){
  document.body.appendChild(overlay());;
  console.log("GF")
});

//ICON BUTTONS

fbIcon.addEventListener("click", function() {
  window.location.href = "http://www.facebook.com";
  });

dscrdIcon.addEventListener("click", function() {
  window.location.href = "http://www.discord.com";
  });

ghIcon.addEventListener("click", function() {
  window.location.href = "https://github.com/MWest352";
  });

inIcon.addEventListener("click", function() {
  window.location.href = "https://www.linkedin.com/in/matthewsedlack/.com";
  });

ytIcon.addEventListener("click", function() {
  window.location.href = "https://www.youtube.com/channel/UC7r-CM07R9PUed1_6QN3a1A";
  });