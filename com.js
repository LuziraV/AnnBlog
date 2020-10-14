let commentForm = document.querySelector('.message');
let commentField = document.querySelector('.comment-field');
let charCounter = document.querySelector('.char-counter');
let submitButton = document.querySelector('.submit-button');



commentField.oninput = function () {
  charCounter.textContent = commentField.value.length;

  if (commentField.value.length > 200 || commentField.value.length < 10) {
    commentForm.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentForm.classList.remove('warning');
    submitButton.disabled = false;
  }
};