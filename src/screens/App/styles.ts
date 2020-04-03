import { StyleSheet } from 'react-native'

import Helpers from '../../utils/Helpers'

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 24
    },
    scrollContent: {
        flex: 1,
        flexGrow: 1
    },
    text: {
        ...Helpers.fontFamily('400', 16),
        textAlign: 'center',
        marginBottom: 16
    }
})

export default styles
