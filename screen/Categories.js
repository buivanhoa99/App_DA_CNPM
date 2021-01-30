import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View,TouchableOpacity,Alert, FlatList} from 'react-native';
import CategoryListItem from '../components/CategoryListItem'
import ski from '../assets/skii.png'
import person from '../assets/person.jpg'
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios'
import { render } from 'react-dom';
export default class Categories extends Component {
   constructor(navigation){
      super(navigation);
      this.navigation = navigation;
      this.state = {
        datas :  [
 
          ]
      }
   }
   componentDidMount(){
     axios.get("http://192.168.1.51:3000/datas")
     .then(res =>{
       this.setState({datas : res.data});
     })
     .catch (err=>{
       console.error(err);
     })
   }
  render(){
  const {datas} =  this.state;
  const navigation = this.navigation;
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
