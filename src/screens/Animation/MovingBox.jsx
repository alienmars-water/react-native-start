import React, { Component } from 'react'
import { Text, View, Animated, Button, LayoutAnimation } from 'react-native'

export default class MovingBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jump: new Animated.Value(0),
            move: new Animated.Value(0),
        }

        Animated.sequence([
            Animated.timing(
                this.state.move,
                {
                    toValue: 120,
                    duration: 200,
                }
            ),
            Animated.spring(
                this.state.jump,
                {
                    toValue: 10,
                    duration: 1000
                }
            ),

        ]).start()
    }

    render() {
        const jumpStyle = this.state.jump.interpolate({
            inputRange: [0, 5, 10],
            outputRange: [0, 15, 0]
        })
        const moveStyle = [{
            translateX: this.state.move,
        }]
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Animated.View 
                style={{ borderWidth: 1, 
                borderColor: 'black', 
                height: 30, 
                width: 120, 
                zIndex: 500,
                elevation: 1,
                transform: moveStyle }}>

                </Animated.View>
                {/* <Text>nextComponent</Text> */}
                <Animated.Text style={{ marginBottom: jumpStyle }}> textInComponent </Animated.Text>
            </View>
        )
    }
}
