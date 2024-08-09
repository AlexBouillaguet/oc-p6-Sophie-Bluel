export function checkLoginStatus() {
    const token = localStorage.getItem('token');
    const authButton = document.getElementById('auth-button');
     
    // Vérifiez si le token existe
    if (token) {
        authButton.textContent = 'Logout'; 
        authButton.addEventListener('click', logout); 
        document.getElementById('edition-mode').style.display = 'block';
        document.getElementById('edit-projects').style.display = 'block'; 
        document.querySelector('.filters-container').style.display = 'none';
    } else { // Si le token n'existe pas, affichez le bouton "Login"
        authButton.textContent = 'Login';
    }
}

function logout() {
    localStorage.removeItem('token');
}