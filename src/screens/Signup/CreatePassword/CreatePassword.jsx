import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './CreatePassword.styles'

export default class CreatePassword extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box,{ backgroundColor: 'green'}]}>
                    <Text>Box Green</Text>
                </View>
                <View style={[styles.box,{ backgroundColor: 'yellow' }]}>
                    <Text>Box Yellow</Text>
                </View>
                <View style={[styles.box, { backgroundColor: 'red'}]}>
                    <Text>Box Red</Text>
                </View>
            </View >
        )
    }
}
