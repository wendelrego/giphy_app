/**
 * Every app has some custom component, like a RoundedImageView or a CustomTextInput
 * All of the components should be exported from their declaring folders.
 * Component Folder Suggested Structure:
 * components
 * |- CustomComponent
 * |  |- index.ts (exports the component)
 * |  |- CustomComponent.tsx (declares the component and it's logic)
 * |  |- styles.ts (the styles used by this component)
 * |  |- types.ts (any interface types exported by this component, props and state types for example)
 * |  |- layout (a optional folder that contains subcomponents, they should be used only by the main component)
 * |  |  |- SubComponent
 * |  |  |  |- index.ts
 * |  |  |  |- SubComponent.tsx
 * |  |  |  |- styles.ts
 * |  |  |  |- types.ts
 */

// import CustomComponent from './CustomComponent'

export default {
    // CustomComponent
}
