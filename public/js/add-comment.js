const CommentForm = document.getElementById('comment-form');

async function addComment(newComment, postId) {
  const response = await fetch(`/api/comments/${postId}`, {
    method: 'POST',
    body: JSON.stringify({
      comment_text: newComment,
      post_id: postId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.replace(`/post/${postId}`);
  } else {
    alert(response.statusText);
  }
}

const newCommentHandler = (event) => {
  event.preventDefault();


  const comment_text = document.getElementById('comment-field').value;
  const commentStatusEl = document.getElementById('comment-status');

  if (comment_text.length <= 4) {
   
    commentStatusEl.textContent =
      'Please make sure the comment contains character count above 4';
    commentStatusEl.style.color = 'red';
    setTimeout(() => {
      commentStatusEl.textContent = 'Required character count above 4';
      commentStatusEl.style.color = 'black';
    }, 4000);
  } else {
    commentStatusEl.textContent = 'Successfully posted... refreshing';
    commentStatusEl.style.color = 'Green';

    const postId = window.location.pathname.split('/')[2];

    setTimeout(() => {
      addComment(comment_text, postId);
    }, 750);
  }
};


addCommentForm.addEventListener('submit', newCommentHandler);