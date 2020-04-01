import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Helpers from '../../utils/Helpers'
import fonts from '../../values/fonts'

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
        flexGrow: 1
    },
    engine: {
        position: 'absolute',
        right: 0
    },
    body: {
        backgroundColor: Colors.white
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionPresentation: {
        ...Helpers.fontFamily(fonts.fontWeight.bold, 30),
        textAlign: 'center'
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark
    },
    highlight: {
        fontWeight: '700'
    }
})

export default styles
