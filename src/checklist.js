//Checklist formaiton and logic

import createDivWithClass from "./divGenerator"
import titleSection from "./title"
export default


function clearTitle(){
  const elementsToRemove = document.querySelectorAll('.title_section');

  for (var i = 0; i < elementsToRemove.length; i++) {
    var element = elementsToRemove[i];
    element.parentNode.removeChild(element);
};
};