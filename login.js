document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  
    const foundAccount = accounts.find(account => account.username === username && account.password === password);
  
    if (foundAccount) {
      // Redirect to result.html
      window.location.href = 'result.html';
    } else {
      alert('Wrong username or password. Please try again.');
    }
  });
  
  document.getElementById('createAccount').addEventListener('click', function() {
    // Tomar elementos input para vasiarlos
    const usernameDocument = document.getElementById('username');
    const passwordDocument = document.getElementById('password');
    // Vaciar elementos
    usernameDocument.value = ''
    passwordDocument.value = ''

    const fullName = prompt('Enter your full name:');
    const username = prompt('Choose a username:');
    const password = prompt('Choose a password:');
  
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  
    // Check if username already exists
    const existingAccount = accounts.find(account => account.username === username);
    if (existingAccount) {
      alert('Username already exists. Please choose a different username.');
      return;
    }
  
    // Store new account in the accounts array
    accounts.push({ fullName, username, password });
    
    // Save updated accounts array to local storage
    localStorage.setItem('accounts', JSON.stringify(accounts));
  
    alert('Account created successfully. Now, please sign in with your credentials.');
  });
  