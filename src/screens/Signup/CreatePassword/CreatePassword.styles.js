import { StyleSheet, Platform } from 'react-native'




export default StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: Platform.OS === 'ios' ? 30 : 0,
        flexDirection: 'column',
        // justifyContent: 'space-evenly'
    },
    box: {
        height: 100,
        width: 100
    },
    boxGreen: {
        backgroundColor: 'green',
        alignSelf: 'flex-start'
    },
    boxYellow: {
        backgroundColor: 'yellow',
        alignSelf: 'flex-end'
    },
    boxRed: {
        backgroundColor: 'red',
        width: 'auto'
    },
    boxBlue: {
        backgroundColor: 'blue',
        alignSelf: 'center'
    }
})