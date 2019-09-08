import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './CreatePassword.styles'

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
