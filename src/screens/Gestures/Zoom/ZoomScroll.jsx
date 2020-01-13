import React, { Component } from 'react'
import { Text, View, ScrollView, Animated } from 'react-native'
import Svg, { Circle, Rect, } from 'react-native-svg';

export default class ZoomScroll extends Component {
    constructor(props) {
        super(props)

        let data = []
        for (let i = 0; i < 100; i++) {
            const element = `this is item ${i}`
            data.push(element)
        }

        this.state = {
            data,
            scrollX: new Animated.Value(0),
            colors: ['red', 'grey', 'pink', 'yellow']
        }
    }


    render() {
        return (
            <ScrollView
                horizontal={true}
                style={{ marginTop: 50 }}
            >
                {/* {this.renderItems()} */}
                {this.renderSVGs()}
            </ScrollView>
        )
    }

    renderItems() {
        const result = this.state.data.map((item, index) => (
            <View key={index} style={{ margin: 20 }}>
                <Text style={{ fontSize: 20, color: 'grey' }}>{item}</Text>
            </View>
        ))

        return result
    }

    renderSVGs() {
        const result = this.state.colors.map((item, index) => (
            <View key={index} style={{width: 1000}}>
                <Svg height="50%" width="100%" viewBox="0 0 100 100">
                    <Rect
                        x="0"
                        y="15"
                        width="1000"
                        height="100"
                        stroke="red"
                        strokeWidth="2"
                        fill={item}
                    />
                </Svg>
            </View>
        ))

        return result
    }
}
