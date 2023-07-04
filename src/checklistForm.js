//Checklist Form Generation

//IMPORT DIV GENERATOR
import createDivWithClass from "./divGenerator"
import titleSection from "./title";

export default

//CREATE OVERLAY
function overlay() {
  const overlaySection = document.createElement('div');
 
  overlaySection.classList.add('overlay_main');
  overlaySection.appendChild(formContainer);
  formContainer.appendChild(formTitleSection)
  formTitleSection.appendChild(formTitle);
  formTitleSection.appendChild(closeButton);
  formContainer.appendChild(formProjectSection)
  formProjectSection.appendChild(projectNameLabel);
  formProjectSection.appendChild(projectNameInput);
  formContainer.appendChild(formSubmitButton);

  return overlaySection;
}

//CREATE FORM FIELD
function createFormElement(text, className) {
  const form = createDivWithClass(className);
  form.innerHTML = text;
  return form;
}

//FORM GENERATION
const formContainer = createFormElement("", 'form_container');
const formTitleSection = createFormElement("", 'form_title_section')
const formTitle = createFormElement("New ToDo List", 'form_title')
const closeButton =   createFormElement("X", 'close_form')
const formProjectSection = createFormElement("", 'form_project_section')

//FORM PROJECT NAME LABEL
const projectNameLabel = document.createElement("label");
projectNameLabel.classList.add("project_name_label")
projectNameLabel.setAttribute("for", "name");
projectNameLabel.textContent = "Project Name:";


//FORM PROJECT NAME INPUT FIELD
const projectNameInput = document.createElement("input");
projectNameInput.classList.add("project_name_input")
projectNameInput.setAttribute("type", "text");
projectNameInput.setAttribute("id", "name");
projectNameInput.setAttribute("placeholder", "Enter Project Name");

//SUBMIT BUTTON
const formSubmitButton = createFormElement("Submit", 'form_submit_button')


//CLOSE BUTTON
closeButton.addEventListener('click', () => {
  const overlaySection = document.querySelector('.overlay_main');
  if (overlaySection) {
    overlaySection.remove();
  }
});