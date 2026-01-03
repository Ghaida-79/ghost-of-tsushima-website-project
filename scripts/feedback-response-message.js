function sendFeedback () {
  const form = document.getElementById('feedbackForm');

  fetch(form.action, {
    method: 'post',
    body: new FormData(form)
  });

  form.style.display = "none";

  document.getElementById('responseMessage').style.display = "flex";
}