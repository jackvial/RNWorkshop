import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const Card = (props) => {
  return (
    <View
      style={{
        height: 200,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#eee',
        borderRadius: 10,
        overflow: 'hidden',
      }}>
      <Image
        source={require('./src/images/cat.jpg')}
        style={{
          width: '100%',
          height: 150,
          resizeMode: 'cover',
        }}
      />
      <Text
        style={{
          marginTop: 8,
        }}>
        React Native Workshop
      </Text>
      <Text>Cat in a tree</Text>
    </View>
  );
};

const App = (props) => {
  return (
    <SafeAreaView>
      <Card />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
