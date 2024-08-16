export async function fetchData() {
    try {
        const response = await fetch('http://localhost:5678/api/works/');
        if (!response.ok) throw new Error("Impossible de récupérer les travaux"); // Vérifie s'il y une erreur
        const data = await response.json();
        return data; // Renvoie les données
    } catch (error) {
        console.error(error); // Affiche les erreurs
    }
}

export async function fetchCategories() {
    try {
        const response = await fetch('http://localhost:5678/api/categories');
        if (!response.ok) throw new Error("Impossible de récupérer les catégories");
        const categories = await response.json();

        // Utilise un Set pour s'assurer que les catégories sont uniques
        const CategoriesSet = [...new Set(categories.map(category => category.name))];

        // Retourne les catégories distinctes
        return CategoriesSet;
    } catch (error) {
        console.error(error);
    }
}