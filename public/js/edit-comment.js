async function editComment(comment_id, newComment) {
    const response = await fetch(`/api/comments/${comment_id}`, {
      method: 'PUT',
      body: JSON.stringify({
        comment_text: newComment,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      const postId = window.location.pathname.split('/')[2];
      document.location.replace(`/post/${postId}`);
    } else {
      alert(response.statusText);
    }
  }
  
 
  const handleSubmit = (confirmBtn, commentId) => {
    confirmBtn.addEventListener('click', () => {
      let newComment =
        confirmBtn.parentNode.parentNode.childNodes[3].childNodes[3].value;
      if (newComment.length <= 4) {
        document.getElementById('new-comment-status').style.display = 'flex';
        setTimeout(() => {
          document.getElementById('new-comment-status').style.display = 'none';
        }, 3000);
      } else {
        editComment(commentId, newComment);
      }
    });
  };
  
  const editBtn = document.querySelectorAll('.edit-comment');
  editBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      let commentId = btn.dataset.commentId;
  
    
      document.getElementById(`delete-comment-${commentId}`).style.display =
        'none';
      btn.style.display = 'none';
  

      const editComment = document.createElement('textarea');
      editComment.classList.add(`edit-comment-input`);

      const currentComment = btn.parentNode.parentNode.childNodes[3].children[1];
      
      editComment.value = currentComment.innerHTML;
      
      currentComment.parentNode.replaceChild(editComment, currentComment);
    
      const confirmBtn = document.getElementById(`confirm-comment-${commentId}`);
      confirmBtn.style.display = 'flex';
  
      handleSubmit(confirmBtn, commentId);
    });
  });