// Réinitialise la modal à sa première vue
export function resetModal() {
     document.getElementById('gallery-view').style.display = 'flex';
     document.getElementById('add-photo-view').style.display = 'none';
     document.getElementById('title').value = '';
     document.getElementById('category').value = '';
     document.getElementById('photo-upload').value = '';
     document.getElementById('preview-container').style.display = 'none';
     document.getElementById('preview-image').src = '';
}