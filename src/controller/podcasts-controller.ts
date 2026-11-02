import {IncomingMessage, ServerResponse} from 'node:http'
import { serviceListEpisodes } from '../services/list-episodes-services.js'
import { serviceFilterEpisodes } from '../services/filter-episodes-services.js'
import { ContentType } from '../utils/content-type.js'
import type { FilterPodcastModel } from '../models/filter-podcast-model.js'

export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {
    const content:FilterPodcastModel = await serviceListEpisodes()

    res.writeHead(content.statusCode, {'content-type': ContentType.JSON})
    res.end(JSON.stringify(content.body))
}

export const getFilterEpisodes = async (req: IncomingMessage, res:ServerResponse) => {
    
    const content:FilterPodcastModel = await serviceFilterEpisodes(req.url)


    res.writeHead(content.statusCode, {'content-type': ContentType.JSON})
    res.end(JSON.stringify(content.body))
}