import { fetchData } from "./fetchData.js";
import { displayData } from "./displayData.js";

// Fonction pour mettre à jour la galerie principale
export async function updateMainGallery() {
     const data = await fetchData();
     displayData(data);
}