import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const main = StyleSheet.create ({
    container : {
        flex: 1,
        backgroundColor:'#303e45'
    },
    banner : {
        backgroundColor : 'red',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems : 'center',
        padding : 10,
        },
        todoText:{
            fontSize: 50,
            fontWeight : 'bold',
            color  : '#ff9b31',
        },
        todoCount: {
            fontSize: 50,
            color  : '#ff9b31',
        },
        emptycomponent : {
            fontSize: 20,
            color  : '#ff9b31',
        }
    
})

const todo_Input = StyleSheet.create({
    Inputcontainer: {
        backgroundColor : '#e0e0e0',
        padding : 10,
        margin:10,
        borderRadius:5,

    },
    container : {
        backgroundColor : '#a7b6bd',
        padding : 10,
        margin:10,
        borderRadius:5,
    },
    buttonContainer : {
        backgroundColor : '#4a636e',
        padding : 10,
        margin:10,
        width : Dimensions.get('window').width/2.5,
        alignSelf: 'center',
        borderRadius:8,
    },
    buttonText : {
        color : 'white',
        fontWeight :'bold',
        textAlign: 'center'
    }
})
const todo_card = StyleSheet.create({
    container: {
        backgroundColor : '#a7b6bd',
        padding : 8,
        margin:5,
        borderRadius:7,
    },
    text : {
        fontSize : 18,
    },
})

export  {main,todo_Input, todo_card};