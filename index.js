/**
 * Application entry point
 */

import { Navigation } from 'react-native-navigation'
import registerComponents from './src/navigation/registerComponents'
import { initPreferences } from './src/storage/preferences/Preferences'
import screens from './src/screens'

Navigation.events().registerAppLaunchedListener(async () => {
    registerComponents()
    await initPreferences()

    await Navigation.setRoot({
        root: {
            component: {
                name: screens.App.name
            }
        }
    })
})
