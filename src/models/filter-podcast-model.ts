import type { Podcast } from "./podcast-models.js";

export interface FilterPodcastModel{
    statusCode: number,
    body: Podcast[]
}