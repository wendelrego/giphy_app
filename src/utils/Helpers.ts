import { Platform, TextStyle } from 'react-native'

import SizeUtils from './SizeUtils'
import fonts from '../values/fonts'

type FontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
type FontAndroidMap = {
    [key in FontWeight]: string
}

const android = Platform.OS === 'android'
const fontAndroid: FontAndroidMap = {
    100: '_thin',
    200: '_thin',
    300: '_light',
    400: '',
    500: '_medium',
    600: '_bold',
    700: '_bold',
    800: '_bold',
    900: '_black'
}

class Helpers {
    static fontFamily = (
        weight: FontWeight,
        size: number,
        max?: number,
        iphoneXSize?: number,
        font: string = fonts.fontFamily.default
    ): TextStyle => {
        if (!android) {
            return {
                fontWeight: weight,
                fontFamily: font,
                fontSize: SizeUtils.normalize(size, max, iphoneXSize)
            }
        }

        return {
            fontFamily: `${font}${fontAndroid[weight]}`,
            fontSize: SizeUtils.normalize(size, max, iphoneXSize)
        }
    }
}

export default Helpers
