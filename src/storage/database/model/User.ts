import Realm from 'realm'
import { UserDTO } from '../../../types'

/**
 * An example schema for the database ;)
 */
class User {
    public static schema: Realm.ObjectSchema = {
        name: 'User',
        primaryKey: 'id',
        properties: {
            id: 'int',
            name: 'string',
            email: 'string',
            imageUrl: 'string?'
        }
    }

    public id: number
    public name: string
    public email: string
    public imageUrl?: string

    constructor(
        id: number,
        name: string,
        email: string,
        imageUrl?: string
    ) {
        this.id = id
        this.name = name
        this.email = email
        this.imageUrl = imageUrl
    }

    // Converts the User DTO to a usable user for the database
    static fromTransfer = (data: UserDTO): User => {
        const {
            id,
            name,
            email,
            image_url: imageUrl
        } = data
        return {
            name,
            email,
            imageUrl,
            id
        }
    }
}

export default User
