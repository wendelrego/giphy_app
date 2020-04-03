import { StyleSheet } from 'react-native'
import Helpers from '../../utils/Helpers'

export default StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
        borderRadius: 8,
        marginBottom: 8
    },
    label: {
        ...Helpers.fontFamily('500', 16),
        textAlign: 'center'
    }
})
