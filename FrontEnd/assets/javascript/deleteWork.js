import { updateMainGallery } from "./updateMainGallery.js";

export async function deleteWork(item, work) {
     
     // Supprime le travail de la base de données
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

          // Supprime le travail de la galerie principale et de la modale
          work.remove();
          await updateMainGallery();

     } catch (error) {
          console.error('Erreur:', error);
     }
}
