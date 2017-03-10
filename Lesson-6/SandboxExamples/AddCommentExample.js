// Combine AddCommentExample with some DOM elements to show a list of comments and a textbox where a user can add another one.

// Globals
let comments = [];

const apiKey = 'b2becbb33a01c2a1085888f14dda841901646b3d8543ac0a925275050cc82f81';
const baseURL = 'http://138.197.158.83:8081';
const photoId = 'inclass';
// Functions
const handleSubmit = () => {
  const commentText = document.getElementById('commentText').value;
  postComment(commentText).then(init).then(function() {
    document.getElementById('commentText').value = '';
  });
}

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}

const postComment = commentString => {
  let optionsWithBody = options;
  optionsWithBody.body = JSON.stringify({ text: commentString});
  console.log(optionsWithBody);
  return fetch(`${baseURL}/api/photos/${photoId}/comments?apiKey=${apiKey}`, optionsWithBody)
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      console.log('There was an error', response.status);
  });
}

const fetchComments = () => {
  return fetch(`${baseURL}/api/photos/${photoId}/comments?apiKey=${apiKey}`).then(function(response) {
    if (response.ok) {
      return response.json();
    }
    console.log('There was an error.', response.status);
    // Should maybe also do response.json() here to display the error message
  }).then(function(data) {
    comments = data;
  });
}
const renderComments = () => {
  const commentsList = document.getElementById('comments');
  const commentsHtml = comments.map(function(comment) {
    return `<li> ${comment.text}</li>`
  }).map();
  commentsList.innerHTML = commentsHtml;
}

const init = () => {
  fetchComments().then(renderComments)
}


init();
