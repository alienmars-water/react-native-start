import React, { Component } from 'react'
import { View, StyleSheet, PanResponder, Animated } from 'react-native'

export default class DragingBall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(), // inits to zero
        };

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([
                null,
                {
                    dx: this.state.pan.x, // x,y are Animated.Value
                    dy: this.state.pan.y,
                }]
            ),
            onPanResponderRelease: () => {
                Animated.spring(
                    this.state.pan, // Auto-multiplexed
                    { toValue: { x: 0, y: 0 } }, // Back to zero
                ).start();
            },
        });
    }



    render() {
        return (
            <Animated.View
                {...this.panResponder.panHandlers}
                style={this.state.pan.getLayout()}>
                {/* {this.props.children} */}
                <View style={styles.ball}></View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    ball: {
        height: 80,
        width: 80,
        borderColor: 'black',
        borderRadius: 40,
        borderWidth: 40
    },
})
