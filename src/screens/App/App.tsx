/**
 * This is a sample app.
 */

import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    Text,
    Button,
    ScrollView,
    View
} from 'react-native'
import { Options, Navigation } from 'react-native-navigation'
import { getManufacturer } from 'react-native-device-info'

import styles from './styles'
import Preferences from '../../storage/preferences/Preferences'
import stacks from '../../values/stacks'
import screens from '..'

interface Props {
    number?: number
}

const App = (props: Props) => {
    const { number = 0 } = props

    // react hooks example
    const [manufacturer, setManufacturer] = useState('')
    useEffect(() => {
        getManufacturer().then(res => setManufacturer(res))
    }, [])

    // Preferences usage example
    Preferences().set('a', [1, 2, 4, 5, 6])
    const numbers = Preferences().get<number[]>('a').filter(it => it < 5)

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {`Screen number #${number + 1}`}
                </Text>
                <ScrollView
                    contentInsetAdjustmentBehavior={'automatic'}
                    contentContainerStyle={styles.scrollContent}>
                    <View style={{ marginBottom: 16 }}>
                        <Button
                            title={'Push a screen'}
                            onPress={() => {
                                Navigation.push(stacks.APP, {
                                    component: {
                                        name: screens.App.name,
                                        // Pass props to screen
                                        passProps: {
                                            number: number + 1
                                        }
                                    }
                                })
                            }} />
                        <Button
                            title={'Show a modal'}
                            onPress={() => {
                                Navigation.showModal({
                                    component: {
                                        name: screens.Modal.name
                                    }
                                })
                            }} />
                    </View>
                    <Text style={styles.text}>
                        {`Numbers is ${JSON.stringify(numbers)}`}
                    </Text>
                    <Text style={styles.text}>
                        {`Your device manufacturer is ${manufacturer}.`}
                    </Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const navOptions: Options = {
    topBar: {
        title: {
            text: 'App'
        }
    }
}

App.options = navOptions

export default App
