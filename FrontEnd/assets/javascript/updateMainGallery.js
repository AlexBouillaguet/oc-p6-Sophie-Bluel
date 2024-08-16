import { fetchData } from "./fetchData.js";
import { displayData } from "./displayData.js";

export async function updateMainGallery() {
     const data = await fetchData();
     displayData(data);
}