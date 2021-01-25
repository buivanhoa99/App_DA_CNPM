import React from 'react';
import { Button,ScrollView, StyleSheet, Text, View,TouchableOpacity,Alert, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Category from './screen/Category'
import Categories from './screen/Categories'
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title = "Go to details"
        onPress = {()=>{
          navigation.navigate('Detail')
        }}
      />
      <Button
        title = "Go back!"
        onPress = {()=>{
          try {
            navigation.goBack();
          } catch (error) {
            console.log(123);
          }
        }}
      />
    </View>
  );
}
function DetailsScreen({route,navigation}) {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title = "Go to details"
        onPress = {()=>{
          navigation.push('Detail')
        }}
      />
        <Button
        title = "Go back!"
        onPress = {()=>{
          try {
            navigation.goBack();
          } catch (error) {
            
          }

        }}
      />
    </View>
  );
}



export default function App() {
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
