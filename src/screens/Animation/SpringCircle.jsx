import React, { Component } from 'react';
import { Animated } from 'react-native';
import Svg, { Circle, } from 'react-native-svg';

export default class SpringCircle extends Component {
    constructor(props) {
        super(props);

        this.state = { circleRadius: new Animated.Value(50) };

        this.state.circleRadius.addListener((circleRadius) => {
            this._myCircle.setNativeProps({ r: circleRadius.value.toString() });
        });

        setTimeout(() => {
            Animated.spring(this.state.circleRadius, { toValue: 100, friction: 3 }).start();
        }, 1000)
    }

    render() {
        let AnimatedCircle = Animated.createAnimatedComponent(Circle);

        return (
            <Svg height="400" width="400">
                <AnimatedCircle ref={ref => this._myCircle = ref} cx="200" cy="250" r="50" fill="black" />
            </Svg>
        )
    }
}
