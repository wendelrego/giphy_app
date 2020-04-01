/**
 * This is a sample app.
 */

import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar
} from 'react-native'

import {
    Header
} from 'react-native/Libraries/NewAppScreen'

import Preferences from '../../storage/preferences/Preferences'
import styles from './styles'

const App = () => {
    Preferences().set('a', [1, 2, 4, 5, 6])
    Preferences().get<number[]>('a').filter(it => it < 5)

    return (
        <>
            <StatusBar barStyle={'dark-content'} />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior={'automatic'}
                    style={styles.scrollView}>
                    <Header />
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionPresentation}>A2S React Native Template</Text>
                            <Text style={styles.sectionDescription}>
                                This is a fully functional app with a lot of things pre-configured
                                {'\n\n'}
                                You can start by editing this screen at
                                {'\n'}
                                <Text style={styles.highlight}>src/screens/App/App.tsx</Text>
                                {'\n\n'}
                                Make changes to the file and then come back to see your edits.
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default App
