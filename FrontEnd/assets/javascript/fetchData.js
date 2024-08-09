export async function fetchData() {
    try {
        const response = await fetch('http://localhost:5678/api/works/');
        if (!response.ok) throw new Error("Could not fetch works"); // Vérifie s'il y une erreur
        const data = await response.json();
        return data; // Renvoie les données
    } catch (error) {
        console.error(error); // Affiche les erreurs
    }
}