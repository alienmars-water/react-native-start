import React, { Component } from 'react'
import { Text, View, Image, Picker } from 'react-native'

import styles from './Robot.styles'

export default class Robot extends Component {
    constructor(props) {
        super(props)

        this.state = {
            language: 'js'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/* {this.renderRobots()} */}
                <Picker
                    mode="dialog"
                    selectedValue={this.state.language}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ language: itemValue })
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="C" value="c" />
                    <Picker.Item label="C++" value="c++" />
                    <Picker.Item label="C#" value="c#" />
                    <Picker.Item label="VB" value="vb" />
                    <Picker.Item label="Go" value="go" />
                    <Picker.Item label="Python" value="phy" />
                    <Picker.Item label="C#1" value="c#1" />
                    <Picker.Item label="VB1" value="vb1" />
                    <Picker.Item label="Go1" value="go1" />
                    <Picker.Item label="Python1" value="phy1" />
                </Picker>
            </View>
        )
    }

    renderRobots() {
        let arr = []
        for (let index = 0; index < 24; index++) {
            arr.push(
                <Image key={index} source={require("../../../assets/images/Robo-Adviser.gif")} />
            )
        }

        return arr
    }
}
