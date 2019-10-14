import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        marginTop: 30
    },
    box: {
        height: 100,
        width: 100
    },
    boxGreen: {
        backgroundColor: 'green'
    },
    boxYellow: {
        backgroundColor: 'yellow'
    },
    boxRed: {
        backgroundColor: 'red'
    },
    boxBlue: {
        backgroundColor: 'blue'
    }
})