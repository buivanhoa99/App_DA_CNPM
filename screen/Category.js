import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View,TouchableOpacity,Alert, FlatList} from 'react-native';

export default class Category extends Component {
  // this.props.navigation.setOptions({title : category.name});
  componentWillMount() {
    // console.log("LOG",this.route.params);
    // this.navigation.setOptions({ title: this.route.params.category.name   })
  }
  constructor(props){
    super(props)
    this.route = props.route;
    this.navigation = props.navigation;
    // category = route.params.name;
  }
  render(){
  return (
    <View style={styles.container}>    
      <Text>Text ne:</Text>
        {/* {Alert.alert("From"+ category.name)} */}

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
