import { updateMainGallery } from "./updateMainGallery.js";

export async function addWork(event) {
     event.preventDefault();
 
     // Récupérer les valeurs des champs
     const formData = new FormData();
     const title = document.getElementById('title').value;
     const category = document.getElementById('category').value;
     const image = document.getElementById('photo-upload').files[0];

     if (!title || !category || !image) {
          alert('Tous les champs sont obligatoires');
          return;
     }

     // Ajouter les données au FormData
     formData.append('title', title);
     formData.append('category', parseInt(category));
     formData.append('image', image);
 
     try {
          const token = localStorage.getItem('token');
          const response = await fetch('http://localhost:5678/api/works', {
               method: 'POST',
               headers: {
                 'Authorization': `Bearer ${localStorage.getItem('token')}`
               },
               body: formData
          });
 
          if (!response.ok) {
               throw new Error('Erreur lors de l\'ajout du travail');
          }
 
          const result = await response.json();
          console.log('Travail ajouté avec succès:', result);
 
          // Ferme la modal
          document.getElementById('modal').close();

          // Réinitialise la modal à sa première vue
          document.getElementById('gallery-view').style.display = 'flex';
          document.getElementById('add-photo-view').style.display = 'none';

          // Vide tous les champs du formulaire
          document.getElementById('title').value = '';
          document.getElementById('category').value = '';
          document.getElementById('photo-upload').value = '';
          document.getElementById('preview-container').style.display = 'none';
          document.getElementById('preview-image').src = '';
 
          // Rafraîchir la galerie
          await updateMainGallery();
 
     } catch (error) {
          console.error('Erreur:', error);
     }
}
