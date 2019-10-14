import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './CreatePassword.styles'

export default class CreatePassword extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, styles.boxGreen]}>
                    <Text>Box Green</Text>
                </View>
                <View style={[styles.box, styles.boxYellow]}>
                    <Text>Box Yellow</Text>
                </View>
                <View style={[styles.box, styles.boxRed]}>
                    <Text>Box Red</Text>
                </View>
                <View style={[styles.box, styles.boxBlue]}>
                    <Text>Box Blue</Text>
                </View>
            </View >
        )
    }
}
