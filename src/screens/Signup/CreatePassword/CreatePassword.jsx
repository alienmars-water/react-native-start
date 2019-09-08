import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class CreatePassword extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box,{ backgroundColor: 'green', flexGrow: 1}]}>
                    <Text>Box Green</Text>
                </View>
                <View style={[styles.box,{ backgroundColor: 'yellow', flexGrow: 1 }]}>
                    <Text>Box Yellow</Text>
                </View>
                <View style={[styles.box, { backgroundColor: 'red', flexGrow: 1 }]}>
                    <Text>Box Red</Text>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: 'black',
        // paddingTop: 50,
        // alignContent: 'center',
        // flexWrap: 'wrap',
        // flexShrink:50
    },
    box: {
        height: 100,
        width: 100,
        position: 'absolute'
    }
})
