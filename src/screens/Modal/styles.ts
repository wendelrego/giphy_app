import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../values/colors'
import Helpers from '../../utils/Helpers'

const { width: deviceWidth } = Dimensions.get('window')
const LOGO_SIZE = deviceWidth * 0.44

export default StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.purple.one,
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
    },
    logo: {
        width: LOGO_SIZE,
        height: LOGO_SIZE
    }
})
