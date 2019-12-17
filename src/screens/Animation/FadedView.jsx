import React, { useState, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const FadeInView = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0
  
    React.useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 10000,
        }
      ).start();
    }, [])

    styles={
        opacity: fadeAnim, // Binds directly
        transform: [{
          translateY: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
          }),
        }],
      }
  
    return (
      <Animated.View                 // Special animatable View
        style={[styles, props.style]}
      >
        {props.children}
      </Animated.View>
    );
  }

  export default () => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
        </FadeInView>
      </View>
    )
  }