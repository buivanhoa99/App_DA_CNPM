import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View,TouchableOpacity,Alert, FlatList} from 'react-native';
import CategoryListItem from '../components/CategoryListItem'
import ski from '../assets/skii.png'
import person from '../assets/person.jpg'
import { NavigationContainer } from '@react-navigation/native';

export default function Categories({navigation}) {
  var datas = [
    {id:1,name:"Áo"},
    {id:2,name:"Quần"},
    {id:3,name:"Mũ"},
    {id:4,name:"Giày1"},
    {id:5,name:"Giày2"},
    {id:6,name:"Giày3"},
    {id:7,name:"Giày4"},
    {id:8,name:"Giày5"},
  ]
  return (
    <View style={styles.container}>
      
      <FlatList
        data = {datas}
        renderItem = {({item})=>
        <TouchableOpacity
          TouchableOpacity = {0.5}
          onPress = {()=>{
            navigation.navigate('Detail',{
              category : item,
            });
          }}
        >
          <CategoryListItem category={item}/>
        </TouchableOpacity>
      }
        keyExtractor= {item=>String(item.id)}
        contentContainerStyle = {{paddingHorizontal:0}}
      /> 
    </View> 
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
