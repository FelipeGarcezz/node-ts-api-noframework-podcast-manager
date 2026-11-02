import * as http from "node:http"
import { getFilterEpisodes, getListEpisodes } from "./controller/podcasts-controller.js"
import { Routes } from "./routes/routes.js"
import { HttpMethod } from "./utils/http-methods.js"


export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    
    //queryString
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""]
    console.log(baseUrl)
    console.log(queryString)
    
    //listar podcasts
    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getListEpisodes(req, res)
    }

    if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(req, res)
    }

}