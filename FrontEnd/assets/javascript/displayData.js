export function displayData(data, filteredCategory = 'all') {
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