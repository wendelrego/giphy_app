/**
 * Most of the times, an app uses an external API this class is used as a base for it.
 * @see ExampleProvider to see how it works
 */
import Axios, { AxiosInstance } from 'axios'

class PrivateAPI {
    private static token?: string

    protected baseUrl: string = 'https://app.base_url.io/api/'
    private axios: AxiosInstance
    private basePath: string

    constructor(basePath: string = '') {
        this.basePath = basePath
        this.axios = Axios.create({
            baseURL: this.baseUrl,
            timeout: 120000,
            headers: { 'Cache-Control': 'no-cache' }
        })

        this.axios.interceptors.request.use((request) => {
            if (PrivateAPI.token) {
                request.headers.Authorization = `Bearer ${PrivateAPI.token}`
            }
            return request
        })
    }

    protected get = <T = any>(path: string, data?: any) => this.axios.get<T>(this.basePath.concat(path), { params: data })
    protected post = <T = any>(path: string, data: any) => this.axios.post<T>(this.basePath.concat(path), data)

    static setToken = (token: string | undefined) => {
        PrivateAPI.token = token
    }
}

export default PrivateAPI
