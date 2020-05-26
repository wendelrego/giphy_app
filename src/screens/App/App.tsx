import React from 'react'
import { SafeAreaView } from 'react-native'
import { Options } from 'react-native-navigation'

import styles from './styles'
import colors from '../../values/colors'

interface Props {

}

const App= ({

}: Props) => (
    <SafeAreaView style={styles.safeAreaContainer}>

    </SafeAreaView>
)

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
