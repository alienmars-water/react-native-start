import React, { Component } from 'react'
import { Text, View, ScrollView, Animated } from 'react-native'

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
            scrollX: new Animated.Value(0)
         }
    }


    render() {
        return (
            <ScrollView
                horizontal={true}
                style={{marginTop: 50}}
                onScroll={Animated.event(
                    // scrollX = e.nativeEvent.contentOffset.x
                    [{
                        nativeEvent: {
                            contentOffset: {
                                x: this.state.scrollX
                            }
                        }
                    }]
                )}
            >
                {this.renderItems()}
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
}
