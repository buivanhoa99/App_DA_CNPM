import React from 'react'
import {
    Image,
    View,
    Text,
    StyleSheet,
} from 'react-native'
import skii from '../assets/skii.png'

export default function CategoryListItem(props){
    const {category} = props;
    console.log(category)
    return(
     <View style = {style.container}>
         <Text style = {style.title}>{category.name}</Text>
         <Image style ={style.categoryImage} source={skii}/>
    </View>
    )
}

const style = StyleSheet.create({
    categoryImage : {
        width : 64,
        height : 64,
        
    },

    container : {
        alignItems : 'center',
        padding : 16,
        borderRadius : 4,
        backgroundColor : '#f5e9e9',
        shadowColor : '#111',
        shadowOpacity : 0.5,
        shadowRadius : 10,
        shadowOffset : {width : 0,height :0},
        marginVertical: 5,
    },
    title : {
        textTransform : 'uppercase',
        marginBottom : 8,
        fontWeight : '900',
        fontSize : 25,
        paddingHorizontal : 16,
    }
})