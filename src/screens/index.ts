import Modal from './Modal'

/**
 * Exports a screen for registration with react-native-navigation
 * Be aware that the name of the screen must be unique or you will run into some problems (:
 * Suggested structure:
 * screens
 * |- ScreenName
 * |  |- index.ts (exports the component)
 * |  |- ScreenName.tsx (declares the component and it's logic)
 * |  |- styles.ts (the styles used by this screen)
 * |  |- types.ts (any interface types exported by this component, props and state types for example)
 * |  |- layout (a optional folder that contains screen only components, they should be used only by this screen)
 * |  |  |- SubComponent
 * |  |  |  |- index.ts
 * |  |  |  |- SubComponent.tsx
 * |  |  |  |- styles.ts
 * |  |  |  |- types.ts
 */

import { AppNavigationRegister } from '../types/template'
import App from './App'

const screens: AppNavigationRegister = {
    App: {
        name: 'screens.App',
        component: App
    },
    Modal: {
        name: 'screen/Modal',
        component: Modal
    }
}

export default screens
