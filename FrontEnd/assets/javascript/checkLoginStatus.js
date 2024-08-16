export function checkLoginStatus() {
    const token = localStorage.getItem('token');
    const authButton = document.getElementById('auth-button');
     
    // Vérifie si le token existe et modifie l'apparence de la page
    if (token) {
        authButton.textContent = 'Logout'; 
        authButton.addEventListener('click', logout); 
        document.getElementById('edition-mode').style.display = 'block';
        document.getElementById('edit-projects').style.display = 'block'; 
        document.querySelector('.filters-container').style.display = 'none';
        document.getElementById('navigation-container').style.marginTop = '106px';
        document.getElementById('portfolio-header').style.marginBottom = '92px';
    } else { // Si le token n'existe pas, affichez le bouton "Login"
        authButton.textContent = 'Login';
    }
}

function logout() {
    localStorage.removeItem('token');
}