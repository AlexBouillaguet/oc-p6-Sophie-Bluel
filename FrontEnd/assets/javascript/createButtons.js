import { fetchCategories } from './fetchData.js';
import { displayData } from './displayData.js';

export async function createButtons(data) {
    const buttonContainer = document.querySelector('.filters-container');
    const categoriesSet = await fetchCategories(); // Extrait les noms des catégories uniques

    // Ajoute le bouton "Tous"
    const allButton = document.createElement('button');
    allButton.textContent = 'Tous'; 
    allButton.classList.add('active');
    allButton.addEventListener('click', () => displayData(data, 'all'));
    buttonContainer.appendChild(allButton);

    // Ajoute les boutons pour chaque catégorie
    categoriesSet.forEach(categoryName => {
        const button = document.createElement('button');
        button.textContent = categoryName;
        button.addEventListener('click', () => displayData(data, categoryName));
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
