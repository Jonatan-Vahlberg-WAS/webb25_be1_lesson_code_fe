import { apiFetch } from "./client";

export async function getAlbums() {
  try {
    const albums = await apiFetch("/api/albums/");
    return albums;
  } catch (error) {
    console.warn("Unable to get albums", error);
    return [];
  }
}
