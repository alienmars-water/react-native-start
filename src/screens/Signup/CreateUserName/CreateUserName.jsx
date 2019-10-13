import React from 'react';
import { View, Text } from 'react-native';
import { WebWrapper } from '../../../components'
import { WebView } from 'react-native-webview'

import styles from './CreateUserName.styles'
import language from '../../../language';

const content = language.t('signup.createUserName');

export default class CreateUserName extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text testID="en" fontFamily='Angeda-Regular' >
                    {content.english}
                </Text>
                <Text testID="zh">
                    {content.chinese}
                </Text>
            </View>
        )
    }
}