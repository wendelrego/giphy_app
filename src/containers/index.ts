import SideMenu from './SideMenu'
/**
 * Sometimes something that needs to be displayed on its own context is not a fully complete screen.
 * In such cases, when you want to display a modal/overlay for example, you should rely on containers :)
 *
 * Exports a container for registration with react-native-navigation
 * Be aware that the name of the container must be unique or you will run into some problems (:
 * Suggested structure:
 * containers
 * |- Container
 * |  |- index.ts (exports the component)
 * |  |- Container.tsx (declares the component and it's logic)
 * |  |- styles.ts (the styles used by this screen)
 * |  |- types.ts (any interface types exported by this component, props and state types for example)
 */

import { AppNavigationRegister } from '../types/template'
// import Modal from './Modal'

const containers: AppNavigationRegister = {
    // Modal: {
    //     name: 'containers.Modal',
    //     component: Modal
    // },
    SideMenu: {
        name: 'container/SideMenu',
        component: SideMenu
    }
}

export default containers
