import { AxiosResponse } from 'axios'

import GiphyAPI from '../GiphyAPI'

import { SearchResponse } from '../types'

class SearchProvider extends GiphyAPI {
    constructor() {
        super('gifs/search')
    }

    query = (
        q: string,
        limit?: number,
        offset?: number,
        rating?: string,
        lang?: string,
        random_id?: string
    ) => this.get<SearchResponse>('', {
        q,
        limit,
        offset,
        rating,
        lang,
        random_id
    })
}

const searchProvider = new SearchProvider()
export default searchProvider
