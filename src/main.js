import "./style.css";

const buttons = document.querySelectorAll(".item");
const projects = document.querySelectorAll(".project");

function hideAllProjects() {
  projects.forEach((project) => {
    project.style.display = "none";
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const projectType = button.getAttribute("data-project-type");

    hideAllProjects();

    const selectedProjects = document.querySelectorAll(
      `.project.${projectType}`
    );

    selectedProjects.forEach((project) => {
      project.style.display = "block";
    });
  });
});

hideAllProjects();
