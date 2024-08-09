import { fetchData } from './fetchData.js';

const modal = document.getElementById('modal');
const openModal = document.getElementById('edit-projects');
const closeModal = document.getElementById('close-modal');
// Ajout de l'événement pour ouvrir la modal
openModal.addEventListener('click', () => {
    modal.showModal();
    displayModalGallery();
});

// Ajout de l'événement pour fermer la modal
closeModal.addEventListener('click', () => {
    modal.close();
});

// Ajout de l'événement pour fermer la modal en cliquant à l'extérieur
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        const rect = modal.getBoundingClientRect(); // Récupération des coordonnées de la modal
        if (
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
        ) {
            modal.close();
        }
    }
});

async function displayModalGallery() {
    const data = await fetchData();
    const galleryModal = document.getElementById('gallery-modal');
    galleryModal.innerHTML = '';

    data.forEach(item => {
        // Création de la div pour chaque élément
        const work = document.createElement('div');
        work.className = 'work-modal';
        // Création de l'image pour chaque élément
        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.title;
        //   Création de l'icône de suppression pour chaque élément
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-trash-can delete-icon';
        //   Ajout de l'écouteur d'événement pour supprimer l'élément
        deleteIcon.addEventListener('click', async () => {
            const isConfirmed = confirm('Voulez-vous vraiment supprimer cet élément ?');
            if (!isConfirmed) return;
            try {
                const response = await fetch(`http://localhost:5678/api/works/${item.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (!response.ok) throw new Error('Erreur lors de la suppression');

                work.remove();
            } catch (error) {
                console.error('Erreur:', error);
            }
        });

        work.appendChild(img);
        work.appendChild(deleteIcon);
        galleryModal.appendChild(work);
    });
};

// Ajout de l'événement pour ouvrir la deuxième vue
const addPhotoButton = document.getElementById('add-photo');
const galleryView = document.getElementById('gallery-view');
const addPhotoView = document.getElementById('add-photo-view');

addPhotoButton.addEventListener('click', () => {
    galleryView.style.display = 'none';
    addPhotoView.style.display = 'flex';
});

// Ajout de l'événement pour revenir à la première vue
const backArrow = document.getElementById('back-arrow');

backArrow.addEventListener('click', () => {
    addPhotoView.style.display = 'none';
    galleryView.style.display = 'flex';
});
