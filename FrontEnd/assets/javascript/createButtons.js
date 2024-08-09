import { displayData } from './displayData.js';

export function createButtons(data) {
    const buttonContainer = document.querySelector('.filters-container');
    const categories = Array.from(new Set(data.map(item => item.category.name))); // Extrait les noms des catégories

    // Ajoute le bouton "Tous"
    const allButton = document.createElement('button');
    allButton.textContent = 'Tous'; 
    allButton.classList.add('active');
    allButton.addEventListener('click', () => displayData(data, 'all'));
    buttonContainer.appendChild(allButton);

    // Ajoute les boutons pour chaque catégorie
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.addEventListener('click', () => displayData(data, category));
        buttonContainer.appendChild(button);
    });

    // Ajoute un écouteur d'événement pour gérer le clic sur les boutons de filtre
    const filterButtons = document.querySelectorAll('.filters-container button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}
