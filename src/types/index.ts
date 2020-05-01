// Export here all the types that are application wide.
// usually depends on business logic

// This is an example interface for a User object that comes from API
// Often times, what you use on the app, or save in database is not a 1:1 match of what the API returns
// This is why this type exists: DTO (Data Transfer Object)
// This same user is converted (adapted) at the [User] class to match database model
export interface UserDTO {
    id: number
    name: string
    email: string
    image_url?: string
    dogs: string[]
}
