import User from './model/User'

interface DBConfiguration {
    version: number,
    log: string,
    schema: Realm.Configuration
}

/**
 * Defines the schema for each realm version, including it's migrations
 * Usually it's only needed to pass a empty arrow function, but if the migration is a little more complex
 * refer to this doc: https://realm.io/docs/javascript/latest/#migrations
 */
const configuration: DBConfiguration[] = [
    {
        version: 1,
        log: 'Initial Schemas',
        schema: {
            schemaVersion: 1,
            schema: [
                User.schema
            ],
            migration: () => {}
        }
    }
]

export default configuration
