// Get all the project popups
const projectPopups = document.querySelectorAll('.project-popup');

// Add a click event listener to each project image
const projectImages = document.querySelectorAll('.project-card');
projectImages.forEach(image => {
  image.addEventListener('click', () => {
    // Get the project ID from the data-project-id attribute of the clicked image
    const projectId = image.dataset.projectId;

    // Show the corresponding project popup
    const popup = document.querySelector(`.project-popup[data-project-id="${projectId}"]`);
    popup.classList.add('show');
  });
});

// Add a click event listener to each close button
const closeButtons = document.querySelectorAll('.close-button');
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Hide the popup when the close button is clicked
    const popup = button.closest('.project-popup');
    popup.classList.remove('show');
  });
});
