import PrivateAPI from '../PrivateAPI'

class ExampleProvider extends PrivateAPI {
    constructor() {
        // the endpoint that this provider will refer to by passing example, we will have (https://baseurl/numbers)
        super('numbers')
    }

    // An example that sends a GET to the endpoint https://baseurl/numbers with query params: { filter: true }
    // and returns a number array
    getAllNumbers = () => this.get<number[]>('', { filter: true })

    // An example that sends a GET to the endpoint https://baseurl/numbers/{id}/details
    // and returns a number
    getSingleNumber = (id: number) => this.get<number>(`/${id}/details`)

    // An example that sends a POST to the endpoint https://baseurl/numbers/add with the numbers array as the POST body
    addNumbers = (numbers: number[]) => this.post('/add', numbers)
}

const exampleProvider = new ExampleProvider()
export default exampleProvider
