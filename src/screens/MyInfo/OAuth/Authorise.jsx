import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { WebWrapper } from '../../../components'
import {
    MYINFO_API_AUTHORISE as authApiUrl,
    MYINFO_APP_CLIENT_ID as clientId,
    MYINFO_APP_REDIRECT_URL as redirectUrl
} from '../../../../config'

import styles from './Authorise.styles'

export default class Authorise extends Component {
    constructor(props) {
        super(props)

        var attributes = "uinfin,name,sex,race,nationality,dob,email,mobileno,regadd,housingtype,hdbtype,marital,edulevel,noa-basic,ownerprivate,cpfcontributions,cpfbalances";
        var purpose = "demonstrating MyInfo APIs"
        var state = "123"


        var authoriseUrl = authApiUrl + "?client_id=" + clientId +
            "&attributes=" + attributes +
            "&purpose=" + purpose +
            "&state=" + state +
            "&redirect_uri=" + redirectUrl;

        this.state = {
            uri: authoriseUrl
        }
    }

    render() {
        return (
            <View style={styles.webview}>
                <WebWrapper
                    uri={this.state.uri}
                    onNavigationStateChange={this.handleWebViewNavigationStateChange}
                />
            </View>
        )
    }

    handleWebViewNavigationStateChange = newNavState => {

    }


}
