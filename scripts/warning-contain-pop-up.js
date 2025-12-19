const warning = document.querySelector('.content-warning');
const acceptButton = document.querySelector('.content-warning-accept');

if (warning && acceptButton) {
  acceptButton.onclick = () => {
    warning.style.display = 'none';
  };
}