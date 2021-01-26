import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Category from './screen/Category'
import Categories from './screen/Categories'

export default function AppNavigator() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Categories} 
      options ={{title :"Trang chủ", headerLeft: null}} />
      <Stack.Screen name="Detail" component={Category} />
      </Stack.Navigator>
     </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal : 16,
    justifyContent : 'center',
    flex : 1,
  },
});
