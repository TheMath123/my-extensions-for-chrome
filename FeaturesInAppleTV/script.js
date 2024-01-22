function hideGradient() {
  const gradientDiv = document.querySelector('.gradient');
  if (gradientDiv) {
    console.log('Change Gradient');
    gradientDiv.style.display = 'none';
  }
}

function movePlayer() {
  const playerBox = document.querySelector('.scrim__body');
  console.log('Move player');
  playerBox.style.top = 'auto';
  playerBox.style.transform = 'translate(-50%, 0)';
  playerBox.style.bottom = '2rem';
}

function onMutation(mutationsList, observer) {
  for (let mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const targetElement = mutation.target;
          if (targetElement.classList.contains('playback-modal--show')) {
              movePlayer();
              hideGradient();
              break;
          }
      }
  }
}

const observer = new MutationObserver(onMutation);
const config = { attributes: true, subtree: true, attributeFilter: ['class'] };
observer.observe(document.body, config);