import { repositoryPodcast } from "../repositories/podcasts-repository.js"
import type { FilterPodcastModel } from "../models/filter-podcast-model.js"
import { StatusCode } from "../utils/status-code.js"

export const serviceFilterEpisodes = async (podcastName:string | undefined):Promise <FilterPodcastModel> => {
    
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    }
    
    const queryString = podcastName?.split("?p=")[1] || ""   
    const data = await repositoryPodcast(queryString)

    responseFormat.statusCode =
    data.length !== 0 ? StatusCode.OK : StatusCode.NoContent

    responseFormat.body = data

    return responseFormat
}