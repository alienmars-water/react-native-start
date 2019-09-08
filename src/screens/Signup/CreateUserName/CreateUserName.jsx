import React from 'react';
import { View, Text } from 'react-native';

import styles from './CreateUserName.styles'
import language from '../../../language';

const content = language.t('signup.createUserName');

export default class CreateUserNameScreen extends React.Component {
    render() {    
        return (
            <View style={styles.container}>
                <Text testID="en">{content.english}</Text>
                <Text testID="zh">{content.chinese}</Text>
            </View>
        )
    }
}