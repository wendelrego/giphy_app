import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight()
    }
})
