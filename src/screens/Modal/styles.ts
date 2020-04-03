import { StyleSheet } from 'react-native'
import colors from '../../values/colors'
import Helpers from '../../utils/Helpers'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.blue.one,
        padding: 16
    },
    headerTitle: {
        flex: 1,
        ...Helpers.fontFamily('500', 16),
        color: colors.white,
        textAlign: 'center'
    },
    close: {
        ...Helpers.fontFamily('400', 16),
        color: colors.white
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
