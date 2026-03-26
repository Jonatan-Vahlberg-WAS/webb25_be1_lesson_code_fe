import { z } from "zod";

export const createSongSchema = z.object({
  name: z.string().trim().min(1, "Låtnamn är obligatoriskt"),
  artistId: z.string().min(1, "Du måste välja en artist"),
  albumId: z.string().nullable().optional(),
});
