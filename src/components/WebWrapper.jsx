import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import { WebView } from 'react-native-webview'

import styles from './WebWrapper.styles'

export default class WebWrapper extends Component {
    static propTypes = {
        uri: PropTypes.string.isRequired,
        styles: PropTypes.object,
        onNavigationStateChange: PropTypes.func
    }

    constructor(props) {
        super(props)

        this.state = {
            loading: false
        }
    }

    render() {
        return (
            <WebView
                source={{ uri: this.props.uri }}
                style={[styles.container, this.props.styles]}
                domStorageEnabled={true}
                startInLoadingState={true}
                renderLoading={this.renderLoadingIndicator}
                onNavigationStateChange={this.onNavigationStateChange}
            />
        )
    }

    renderLoadingIndicator() {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="orange" />
            </View>
        )
    }

    onNavigationStateChange = (newNavState) => {
        this.setState({ loading: newNavState.loading })

        if (this.props.onNavigationStateChange) {
            this.props.onNavigationStateChange(newNavState)
        }
    }
}
