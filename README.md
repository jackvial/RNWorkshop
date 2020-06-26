# RNWorkshop - React Native workshop

## Setting up your environment and creating a new project
See https://reactnative.dev/docs/environment-setup

## Running the app in the iOS simulator
- Open Xcode
- Click "Open another project..." on the bottom right
- Browse to your project, select the .xcworkspace file in the ios folder and open it
- Choose a target device (I recommend the iPhone 11 because it has the notch and we want to be sure we account for it)
- Press the play button on the top left of XCode. The first compile and launching the simulator will be slow.
- The app should launch in the similator

## Your first component and rendering to the screen + basic styling
`git checkout gh-1-first-component`

## Navigation Basics
`git checkout gh-2-navigation-basics`
- https://reactnavigation.org/

```
npm install @react-navigation/native
```
```
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
```
cd ios && pod install
```
Tab navigation https://reactnavigation.org/docs/tab-based-navigation
Stack navigation npm install @react-navigation/stack

## A simple list view with detail page

## Making HTTP Requests

## Debugging with Flipper
https://github.com/facebook/flipper
