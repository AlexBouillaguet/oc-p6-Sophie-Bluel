import { fetchData } from './fetchData.js';
import { displayData } from './displayData.js';
import { createButtons } from './createButtons.js';
import { checkLoginStatus } from './checkLoginStatus.js';

document.addEventListener('DOMContentLoaded', async () => { // Attendre que le DOM soit chargé
    checkLoginStatus(); // Vérifie si l'utilisateur est connecté
    try {
        const data = await fetchData(); // Récupère les données
        displayData(data); // Affiche les travaux dans la galerie
        createButtons(data); // Crée les boutons dynamiquement 
    } catch (error) {
        console.error('Error initializing the application:', error);
    }
});
