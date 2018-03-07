const mainContainer = document.querySelector('main');

createGrid(16);

function createGrid (size) {
  for (var i = 0; i < (size * size); i++) {
    mainContainer.appendChild(document.createElement('div'));
  }
}
