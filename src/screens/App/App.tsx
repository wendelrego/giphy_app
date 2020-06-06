import React from 'react'
import { SafeAreaView , Text } from 'react-native'

import styles from './styles'
import colors from '../../values/colors'

interface Props {

}

const App= ({

}: Props) => (
    <SafeAreaView style={styles.safeAreaContainer}>
        <Text>App!</Text>
    </SafeAreaView>
)

export default App
