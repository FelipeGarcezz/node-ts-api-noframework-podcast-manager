import type { FilterPodcastModel } from "../models/filter-podcast-model.js"
import { repositoryPodcast } from "../repositories/podcasts-repository.js"
import { StatusCode } from "../utils/status-code.js"

export const serviceListEpisodes =  async (): Promise<FilterPodcastModel> => {

    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    }
  
    const data = await repositoryPodcast()

    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: []
    }
        

    return responseFormat
}