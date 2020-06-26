import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

const Card = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={(e) => {
        navigation.navigate('CatsDetail');
      }}
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
        {props.title}
      </Text>
      <Text>{props.subtitle}</Text>
    </TouchableOpacity>
  );
};

const Cats = (props) => {
  const catsData = [
    {
      id: 1,
      title: 'React Native Workshop Day 1',
      subtitle: 'cat in a tree',
      image: 'cat.jpg',
    },
    {
      id: 2,
      title: 'React Native Workshop Day 2',
      subtitle: 'more about cats',
      image: 'cat.jpg',
    },
    {
      id: 3,
      title: 'React Native Workshop Day 3',
      subtitle: 'cats again...',
      image: 'cat.jpg',
    },
  ];
  return (
    <SafeAreaView>
      {catsData.map((item, key) => {
        return (
          <Card
            key={key}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
          />
        );
      })}
    </SafeAreaView>
  );
};

const CatsDetail = (props) => {
  return (
    <SafeAreaView>
      <Text>Details about cats</Text>
    </SafeAreaView>
  );
};

const SettingsScreen = (props) => {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
      }}>
      <Text>Settings screen</Text>
    </SafeAreaView>
  );
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CatsStack = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cats" component={Cats}></Stack.Screen>
      <Stack.Screen name="CatsDetail" component={CatsDetail}></Stack.Screen>
    </Stack.Navigator>
  );
};

const App = (props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CatsStack" component={CatsStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
