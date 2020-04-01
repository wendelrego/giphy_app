import { Platform } from 'react-native'

type FontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
type FontNames = 'thin' | 'ultraLight' | 'light' | 'regular' | 'medium' | 'semiBold' | 'bold' | 'heavy' | 'black'

type FontWeightMap = {
    [name in FontNames]: FontWeight
}

interface FontMap {
    fontWeight: FontWeightMap,
    fontFamily: { default: string }
}

const fonts: FontMap = {
    fontWeight: {
        thin: '100',
        ultraLight: '200',
        light: '300',
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        heavy: '800',
        black: '900'
    },
    fontFamily: {
        default: Platform.OS === 'ios' ? 'Helvetica' : 'Product'
    }
}

export default fonts
