import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    webview: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 30 : 0
    }
})