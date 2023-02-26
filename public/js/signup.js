const signupForm = document.getElementById('signup-form');

async function signupFormHandler(event) {
  event.preventDefault();
 
  const username = document.getElementById('username-signup').value;
  const email = document.getElementById('email-signup').value;
  const password = document.getElementById('password-signup').value;
  const signupStatusEl = document.getElementById('signup-status');
  if (username.length <= 4 || email.length <= 4 || password.length <= 4) {
   
    signupStatusEl.textContent =
      'Please make all inputs are filled with character count above 4';
    signupStatusEl.style.color = 'red';

    setTimeout(() => {
      signupStatusEl.textContent =
        'Fill in all required inputs with character count above 4';
      signupStatusEl.style.color = 'black';
    }, 4000);
  } else {
   
    const response = await fetch(`/api/users`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

   
    if (response.ok) {
      signupStatusEl.textContent = 'Sign up successful, refreshing...';
      signupStatusEl.style.color = 'green';
      setTimeout(() => {
        document.location.replace('/dashboard');
      }, 1250);
    } else {
   
      alert(response.statusText);
    }
  }
}


signupForm.addEventListener('submit', signupFormHandler);