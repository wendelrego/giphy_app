import { StyleSheet, Dimensions } from 'react-native'

import Helpers from '../../utils/Helpers'
import colors from '../../values/colors'

const { width: deviceWidth } = Dimensions.get('window')
const LOGO_SIZE = deviceWidth * 0.44

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.orange.one
    },
    text: {
        ...Helpers.fontFamily('400', 16),
        textAlign: 'center',
        color: colors.white,
        marginBottom: 16
    },
    logo: {
        width: LOGO_SIZE,
        height: LOGO_SIZE,
        marginBottom: 16,
        tintColor: colors.white
    },
    btnContainer: {
        width: '100%',
        alignItems: 'center'
    }
})

export default styles
