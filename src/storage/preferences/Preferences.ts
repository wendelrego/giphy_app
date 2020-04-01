// @ts-ignore
import SyncStorage from 'sync-storage'

class Preferences {
    private static instance: Preferences

    static init = async () => {
        await SyncStorage.init()
        Preferences.instance = new Preferences()
        return Preferences.instance
    }

    static getInstance = (): Preferences => {
        if (!Preferences.instance) {
            console.warn('You need to init the preferences before using it')
        }
        return Preferences.instance
    }

    get = <T = any>(key: string): T => SyncStorage.get(key)
    set = (key: string, data: any) => {
        if (data === undefined) {
            console.warn('Can\'t save undefined in preferences')
            return
        }
        SyncStorage.set(key, data)
    }
}


export const initPreferences = Preferences.init

const preferences = Preferences.getInstance
export default preferences
