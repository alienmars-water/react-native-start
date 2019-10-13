import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import { WebWrapper } from '../../../components'

import styles from './Homepage.styles'

export default class Homepage extends Component {
    render() {
        return (
            <View style={styles.webview}>
                <WebWrapper
                    uri="https://www.singpass.gov.sg/myinfo/intro"
                    onNavigationStateChange={this.handleWebViewNavigationStateChange}
                />
            </View>
        )
    }

    handleWebViewNavigationStateChange = newNavState => {
        const { loading } = newNavState

        if (!loading) {
            // Alert.alert('complete')
        }
    }
}
