import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './styles'

interface Props {
    onPress: () => void,
    backgroundColor: string,
    color: string,
    label: string
}

const Button = (props: Props) => {
    const {
        onPress,
        backgroundColor,
        color,
        label
    } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, { backgroundColor }]}>
            <Text style={[styles.label, { color }]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Button
