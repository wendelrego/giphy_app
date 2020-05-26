import {
    GIFObject,
    GiphyOptions,
    Giphy,
    Images,
    MultiResponse,
    SearchOptions,
    SingleResponse
} from 'giphy-api'

interface PaginationObject {
    offset: number
    total_count: number
    count: number
}

interface MetaObject {
    msg: string
    status: number
    response_id: string
}

export  {
    GIFObject,
    GiphyOptions,
    Giphy,
    Images,
    MultiResponse,
    SearchOptions,
    SingleResponse,
    PaginationObject,
    MetaObject
}
