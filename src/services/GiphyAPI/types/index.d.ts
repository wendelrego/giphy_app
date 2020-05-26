import { GIFObject, PaginationObject, MetaObject } from '../../../types/Giphy'

interface SearchResponse {
    data: GIFObject[]
    pagination: PaginationObject
    meta: MetaObject
}

export {
    SearchResponse
}
