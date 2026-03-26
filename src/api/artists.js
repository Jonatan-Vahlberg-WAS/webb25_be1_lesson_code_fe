import { apiFetch } from "./client";

export async function getArtists() {
  try {
    const artists = await apiFetch("/api/artists/");
    return artists;
  } catch (error) {
    console.warn("Unable to get artists", error);
    return [];
  }
}
