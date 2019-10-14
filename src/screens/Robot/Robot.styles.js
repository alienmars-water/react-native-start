import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // marginBottom: 30
    },
    picker: {
        marginLeft: 60,
        width: Dimensions.get('window').width - 60,
        height: Dimensions.get('window').height / 3
    }
})