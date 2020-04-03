/**
 * This is a sample app.
 */

import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    Text,
    View,
    Image,
    StatusBar
} from 'react-native'
import { Options, Navigation } from 'react-native-navigation'
import { getManufacturer } from 'react-native-device-info'

import styles from './styles'
import Preferences from '../../storage/preferences/Preferences'
import stacks from '../../values/stacks'
import screens from '..'
import images from '../../assets/images'
import colors from '../../values/colors'
import Button from '../../components/Button'

interface Props {
    componentId: string,
    number?: number,
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
    Preferences().get<number[]>('a').filter(it => it < 5)

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={images.logo} />
                <Text style={styles.text}>
                    {`Screen number #${number}`}
                </Text>
                <View style={styles.btnContainer}>
                    <Button
                        label={'Push a screen'}
                        backgroundColor={colors.purple.one}
                        color={colors.white}
                        onPress={() => {
                            Navigation.push(stacks.APP, {
                                component: {
                                    name: screens.App.name,
                                    // Pass props to screen
                                    passProps: {
                                        number: number + 1
                                    },
                                    options: {
                                        topBar: {
                                            backButton: {
                                                title: `App #${number}`
                                            }
                                        }
                                    }
                                }
                            })
                        }} />
                    <Button
                        label={'Show a modal'}
                        backgroundColor={colors.purple.one}
                        color={colors.white}
                        onPress={() => {
                            Navigation.showModal({
                                component: {
                                    name: screens.Modal.name
                                }
                            })
                        }} />
                </View>
                <Text style={styles.text}>
                    {`Your device manufacturer is ${manufacturer}.`}
                </Text>
            </View>
        </SafeAreaView>
    )
}

const navOptions: Options = {
    topBar: {
        title: {
            text: 'App',
            color: colors.white
        },
        background: {
            color: colors.orange.one
        },
        backButton: {
            color: colors.white
        },
        elevation: 0,
        noBorder: true
    }
}

App.options = navOptions

export default App
