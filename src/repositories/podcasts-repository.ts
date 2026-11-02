import fs from "node:fs"
import path from "node:path"
import type { Podcast } from "../models/podcast-models.js"


const __dirname = import.meta.dirname
const pathData = path.join(__dirname, "../repositories/podcasts.json")

export const repositoryPodcast = (podcastName?: string): Promise<Podcast[]> => {
    const language = "utf-8"
   
    const rawData = fs.readFileSync(pathData, language)
    let jsonFile = JSON.parse(rawData)

    if(podcastName){
        jsonFile = jsonFile.filter((podcast:Podcast) => podcast.podcastName === podcastName)
    }

    
    return jsonFile
}