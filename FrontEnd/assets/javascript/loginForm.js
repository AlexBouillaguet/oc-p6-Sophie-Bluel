const loginBtn = document.getElementById('auth-button');
loginBtn.style.fontWeight = 'bold';

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empeche le rechargement de la page
     // Récupération des valeurs des champs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    login(email, password);
});

async function login(email, password) {
    try {
          const response = await fetch('http://localhost:5678/api/users/login', {
               method: 'POST',
               headers: {
               'Content-Type': 'application/json'
               },
               body: JSON.stringify({ email, password }) 
          });

          if (!response.ok) {
               throw new Error('Erreur de connexion'); 
          }

          const result = await response.json();

          if (result.token) {
               localStorage.setItem('token', result.token); // Stocke le token dans le localStorage
               window.location.href = 'index.html';
          } else {
               alert('Erreur de connexion');
          }
     } catch (error) { // Gestion des erreurs
          console.error('Erreur de connexion :', error);
          alert('Erreur dans l’identifiant ou le mot de passe');
     }
}
