/**
 * Application entry point
 */

import { Navigation } from 'react-native-navigation'
import registerComponents from './src/navigation/registerComponents'
import { initPreferences } from './src/storage/preferences/Preferences'
import screens from './src/screens'
import stacks from './src/values/stacks'

Navigation.events().registerAppLaunchedListener(async () => {
    registerComponents()
    await initPreferences()

    await Navigation.setRoot({
        root: {
            stack: {
                id: stacks.APP,
                children: [
                    {
                        component: {
                            name: screens.App.name
                        }
                    }
                ]
            }
        }
    })
})
