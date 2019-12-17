import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableHighlight, Modal, DrawerLayoutAndroid, MaskedViewIOS, Platform } from 'react-native';
import { WebWrapper } from '../../../components'
import { WebView } from 'react-native-webview'

import styles from './CreateUserName.styles'
import language from '../../../language';

const content = language.t('signup.createUserName');

export default class CreateUserName extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false
        }
    }

    render() {
        // const strategy = Platform.OS === 'ios' ? 'padding' : ''
        // return (
        //     <KeyboardAvoidingView style={styles.container} behavior={strategy}>
        //         <TextInput style={styles.textInput} />

        //         <Text testID="en" fontFamily='Angeda-Regular' >
        //             {content.english}
        //         </Text>
        //         <Text testID="zh">
        //             {content.chinese}
        //         </Text>
        //     </KeyboardAvoidingView>

        return (
            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    presentationStyle="pageSheet"
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                    >
                    <View style={{ flex: 1, marginTop: 22, backgroundColor: 'black' }}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    style={{ marginTop: 30 }}
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>
            </View>
        );
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible })
    }
}