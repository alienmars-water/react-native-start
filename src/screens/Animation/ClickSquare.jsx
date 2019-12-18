import React from 'react';
import { Animated, View, Button } from 'react-native';

class ClickSquare extends React.Component {
    state = {
        scaleAnim: new Animated.Value(0)
    };

    componentWillMount() {
        Animated.timing(
            this.state.scaleAnim,
            {
                toValue: 2,
                duration: 500
            }
        ).start();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.x != this.props.x || nextProps.y != this.props.y) {
            this.setState({
                scaleAnim: new Animated.Value(0)
            })
        }
    }

    componentDidUpdate() {
        this.startAnimation()
    }

    render() {
        return (
            <View>
                <Animated.View
                    style={{
                        position: "absolute",
                        top: this.props.y,
                        left: this.props.x,
                        width: 50,
                        height: 50,
                        backgroundColor: "red",
                        transform: [
                            {
                                scaleY: this.state.scaleAnim
                            }, {
                                scaleX: this.state.scaleAnim
                            }, {
                                translateX: -25
                            }, {
                                translateY: -25
                            }
                        ]
                    }} />

                <View style={{ flexDirection: 'row', marginTop: 50, justifyContent:"center" }}>
                    <Button
                        title="Add X"
                        onPress={this.onButtonPressX}
                    />
                    <Button
                        title="Add Y"
                        onPress={this.onButtonPressY}
                    />
                </View>
            </View>
        );
    }

    onButtonPressX = () => {
        this.props.onButtonPressX()
    }

    onButtonPressY = () => {
        this.props.onButtonPressY()
    }

    startAnimation = () => {
        Animated.timing(
            this.state.scaleAnim,
            {
                toValue: 2,
                duration: 500
            }
        ).start();
    }
}

export default class ClickAnimation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 200,
            y: 200
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 3 }}>
                    <ClickSquare
                        x={this.state.x}
                        y={this.state.y}
                        onButtonPressX={this.onButtonPressX}
                        onButtonPressY={this.onButtonPressY}
                    />
                </View>

                <View style={{ flex: 2 }}>
                    <Button
                        title="Press me"
                        onPress={this.onButtonPress}
                    />
                </View>
            </View>

        )
    }

    onButtonPress = () => {
        this.setState({
            x: this.state.x + 10,
            y: this.state.y + 20
        })
    }

    onButtonPressX = () => {
        this.setState({
            x: this.state.x + 10
        })
    }

    onButtonPressY = () => {
        this.setState({
            y: this.state.y + 20
        })
    }
}