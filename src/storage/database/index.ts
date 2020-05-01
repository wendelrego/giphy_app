import Realm from 'realm'
import configuration from './schemas'

/**
 * This class serves as an entry point to the realm database
 * After initialized, you should refer to this in order to access the database
 *
 * Remember, Realm doesn't play cool when opening same database more than once,
 * that's why it is a 'singleton' here ;)
 *
 * The configuration constant defines the realm schema and the migrations needed, check it out  :)
 */
class RealmManager {
    public static instance: RealmManager
    public static database: Realm

    static init = async () => {
        RealmManager.instance = new RealmManager()
        RealmManager.database = new Realm(configuration[configuration.length - 1].schema)
        return RealmManager.instance
    }

    static getObjects = <T = any>(type: string | Realm.ObjectType) => RealmManager.database.objects<T>(type)
}

export default RealmManager
