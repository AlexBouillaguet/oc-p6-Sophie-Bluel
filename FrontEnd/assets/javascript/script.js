async function fetchData() {
    try {
        const response = await fetch('http://localhost:5678/api/works/');
        if (!response.ok) throw new Error("Could not fetch works"); // Vérifie s'il y une erreur
        const data = await response.json();

        displayData(data); // Affiche les travaux dans la gallerie
        createButtons(data); // Crée les boutons dynamiquement 

    } catch (error) {
        console.error(error); // Affiche les erreurs
    }
}
 
function createButtons(data) {
    const buttonContainer = document.querySelector('.filters-container');
    const categories = Array.from(new Set(data.map(item => item.category.name))); // Extrait les noms des catégories
 
    // Ajoute le bouton "Tous"
    const allButton = document.createElement('button');
    allButton.textContent = 'Tous';
    allButton.addEventListener('click', () => displayData(data, 'all'));
    buttonContainer.appendChild(allButton);
 
    // Ajoute les boutons pour chaque catégorie
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.addEventListener('click', () => displayData(data, category));
        buttonContainer.appendChild(button);
    });
}
 
function displayData(data, filteredCategory = 'all') {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Vide la galerie existante
 
    data.forEach(item => {
        if (filteredCategory === 'all' || filteredCategory === item.category.name) { // Condition pour le tri
            const work = document.createElement('div');

            const img = document.createElement('img');
            img.src = item.imageUrl;
            img.alt = item.title; // Ajout d'un texte alternatif pour l'image à partir du titre

            const title = document.createElement('h3');
            title.textContent = item.title;

            work.appendChild(img);
            work.appendChild(title);
            gallery.appendChild(work);
        }
    });
}
 
fetchData();
 