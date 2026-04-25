// modal.js (starter template)
// Goal: Clicking a project card opens a modal and loads data from projects[index].

// TODO 1: Create an array of project objects.
// Each object should have: title, details, link_text, href
const projects = [
  {title: "Modal Design", details: "During my time at the University of Montana, I took multiple programming classes, including a web design and programming course. For this modal project, I used the knowledge I gained from the course to create a webpage featuring 6 projects and a fully accessible modal, built with JavaScript and CSS. This project showed me the use cases and importance of JavaScript in Web Design.", link_text: "View GitHub", href: "https://github.com/CalebPelletier/Pelletier-csci181-p2"},
  
  {title: "Emulatting a Website", details: "During my time at the University of Montana, I took multiple programming classes, including a web design and programming course. For this project, I used the knowledge I gained from the course to emulate a popular artist's webpage (tameimpala.com). This project allowed me to practice and apply my skills in both semantic HTML and CSS.", link_text: "View GitHub", href: "https://github.com/CalebPelletier/Pelletier-csci181-p1"},
  
  {title: "Python Browser Game", details: "During my time at the University of Montana, I took multiple programming classes, including an introductory class on coding in Python. For this project, I used the knowledge I gained from the course to create a short game that utilizes user inputs to create unique storylines on every execution. This project allowed me to practice and apply my skills in the control flow of programming.", link_text: "View Project", href: "https://colab.research.google.com/drive/1QjDVtvO6fUMxU48ET9sUZKDWayokBJCr"},

];

// TODO 2: Select your modal elements from the DOM and store them in variables
// Required variables: modal, modal_title, modal_details, modal_link, modal_close
const modal_container = document.querySelector(".modal-container");
const modal_title = document.querySelector(".modal-description h4");
const modal_details = document.querySelector(".modal-description p");
const modal_link = document.querySelector(".modal-description a");
const close_button = document.querySelector(".close-button");

// TODO 3: Select all project card buttons
const card_buttons = document.querySelectorAll("#project1-btn, #project2-btn, #project3-btn");

// TODO 4: Complete this function so it loads the correct project data and opens the modal
function openModalByIndex(index) {
  const project = projects[index];
  if (!project) return;

  // TODO 4a: Update your modal content here
  // Hint: modal_title.textContent = ?
  modal_title.textContent = project.title;

  // If you don’t have these elements yet, add them in HTML
  if (modal_details) modal_details.textContent = project.details;
  if (modal_link) {
    modal_link.textContent = project.link_text;
    modal_link.href = project.href;
  }

// TODO 4b: Open the modal with modal.showModal()
  modal_container.classList.add("show");
  document.body.style.overflow = "hidden";
}

// This is what you should call in your click event handler for cards
// It contains some things we haven't talked about yet, so it is provided for you
function onCardClicked(event) {
  const index = Number(event.currentTarget.dataset.index);
  openModalByIndex(index);
}

// TODO 5: Use a for loop to add a click event listener to each card in card_buttons
// and use onCardClicked as the click event's function
card_buttons.forEach((button, index) => {
  button.dataset.index = index;
  button.addEventListener("click", onCardClicked);
});

// TODO 6: Add a click event listener to the modal close button that uses the built-in modal.close() method
close_button.addEventListener("click", () => {
  modal_container.classList.remove("show");
  document.body.style.overflow = "";
});