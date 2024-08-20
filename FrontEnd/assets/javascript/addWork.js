import { updateMainGallery } from "./updateMainGallery.js";
import { resetModal } from "./resetModal.js";
export async function addWork(event) {
     event.preventDefault();
 
     // Récupérer les valeurs des champs
     const formData = new FormData();
     const title = document.getElementById('title').value;
     const category = document.getElementById('category').value;
     const image = document.getElementById('photo-upload').files[0];
     // Vérifier que tous les champs sont remplis
     if (!title || !category || !image) {
          alert('Tous les champs sont obligatoires');
          return;
     }

     // Ajouter les données au FormData
     formData.append('title', title);
     formData.append('category', parseInt(category));
     formData.append('image', image);
 
     try {
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
          resetModal();
 
          // Rafraîchir la galerie
          await updateMainGallery();
 
     } catch (error) {
          console.error('Erreur lors de l\'ajout du travail:', error);
     }
}
