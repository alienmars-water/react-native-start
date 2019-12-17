import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Platform.OS == 'ios' ? 30 : 0,
        marginBottom: 30
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'stretch',
        height: 30,
        marginLeft: 20,
        marginRight: 20
    }
})