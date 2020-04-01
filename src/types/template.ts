// These types are used by the template
import React from 'react'

interface Screen {
    name: string,
    component: React.ComponentType<any>
}

export interface AppNavigationRegister {
    [screenName: string]: Screen
}

export interface NavigationDefaultProps {
    componentId: string
}
