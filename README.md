# react-native-start
Leaning React Native step by step

#Notes
1. add fonts
    a) create ./assets/fonts folder
    b) copy xxx.ttf into /fonts folder
    c) set "assets" path in package.json
    d) react-native link

2. support multi-language
    a) https://github.com/AlexanderZaytsev/react-native-i18n 
    b) pod install for iOS

3. Jest & Enzyme
    a) config "transform" to support jsx
    b) enzyme-adapter-react-16 has dependency on react-dom
    c) expect cheatsheet: https://devhints.io/expectjs