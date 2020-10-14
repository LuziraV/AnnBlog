let commentForm = document.querySelector('.message');
let commentField = document.querySelector('.comment-field');
let charCounter = document.querySelector('.char-counter');
let submitButton = document.querySelector('.submit-button');
let commentList = document.querySelector('.block-comment_people_list');
let avaName = document.querySelector('.user-name');
let amail = document.querySelector('email-name');
submitButton.disabled = true;
submitButton.onclick = function (evt) {
    evt.preventDefault();
  
    let newComment = document.createElement('li');
    let newCommentDivOne = document.createElement('div');
    let newCommentImg = document.createElement('img');
    let newCommentPone = document.createElement('p');
    let newCommentDivTwo = document.createElement('div');
    let newCommentPtwo = document.createElement('p');
    newComment.classList.add('block-comment_people_list-item');
    newCommentDivOne.classList.add('block-comment_people_list-item-ava-name');
    newCommentImg.classList.add('block-comment__img');
    newCommentPone.classList.add('ava-name');
    newCommentPtwo.textContent = commentField.value;
    newCommentPone.textContent = avaName.value;
    commentField.value = '';
    avaName.value = '';
    commentList.append(newComment);
    newComment.append(newCommentDivOne);
    newCommentDivOne.append(newCommentImg);
    newCommentDivOne.append(newCommentPone);
    newComment.append(newCommentDivTwo);
    newCommentDivTwo.append(newCommentPtwo);
    newCommentImg.src='ava-1.png';
  charCounter.textContent = 0;
  
  };

commentField.oninput = function () {
  charCounter.textContent = commentField.value.length;

  if ( commentField.value.length > 200 || commentField.value.length < 10 ) {
    commentForm.classList.add('warning');
    charCounter.classList.add('warning');
    submitButton.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentForm.classList.remove('warning');
    charCounter.classList.remove('warning');
    submitButton.classList.remove('warning');
    submitButton.disabled = false;
  }
};
