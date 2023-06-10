//Checklist Form Generation

//IMPORT DIV GENERATOR
import createDivWithClass from "./divGenerator"

export default

//CREATE OVERLAY
function overlay() {
  const overlay = document.createElement('div');
 
  overlay.classList.add('overlay_main');
  overlay.appendChild(formContainer);
  
  return overlay;
}

//CREATE FORM FIELD
function createForm(text, className) {
  const form = createDivWithClass(className);
  form.innerHTML = text;
  return form;
}

//FILL FORM FIELD TEST
const formContainer = createForm("Hello World", 'form_container');




