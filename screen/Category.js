import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View,TouchableOpacity,Alert, FlatList} from 'react-native';

export default function Category({route,navigation }) {
  let category = route.params.category;
  return (
    <View style={styles.container}>
      <Text>Text ne:</Text>
        {Alert.alert("From"+ category.name)
        }

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
