import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'

import styles from './styles'

interface Props {
    componentId: string
}

const Modal = (props: Props) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={[styles.close, { opacity: 0 }]}>Close</Text>
            <Text style={styles.headerTitle}>Header</Text>
            <TouchableOpacity onPress={() => {
                Navigation.dismissModal(props.componentId)
            }}>
                <Text style={styles.close}>Close</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.content}>
            <Text>Modal content!</Text>
        </View>
    </View>
)

export default Modal
