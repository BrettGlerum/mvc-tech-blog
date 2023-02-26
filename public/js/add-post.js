const addPostForm = document.getElementById('addPost-form');

async function newPostHandler(event) {
  event.preventDefault();

  const postTitle = document.getElementById('add-post-title').value;
  const postElement = document.getElementById('add-post-desc').value;
  const addPostStatusEl = document.getElementById('addpost-status');
  if (postTitle.length <= 4 || postElement.length <= 4) {
   
    addPostStatusEl.textContent =
      'Please make all inputs are filled with character count above 4';
    addPostStatusEl.style.color = 'red';
    setTimeout(() => {
      addPostStatusEl.textContent =
        'Fill in all required inputs with character count above 4';
      addPostStatusEl.style.color = 'black';
    }, 4000);
  } else {
    
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        postTitle
,
        postElement
,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });


    if (response.ok) {
      addPostStatusEl.textContent = 'Successfully posted, refreshing...';
      addPostStatusEl.style.color = 'Green';
      setTimeout(() => {
        document.location.replace('/dashboard');
      }, 750);
    } else {

      alert(response.statusText);
    }
  }
}


addPostForm.addEventListener('submit', newPostHandler);