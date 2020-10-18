import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {todo_Input} from '../styles';
const TodoInput =(props) =>{
    const [text, setText] = useState("");
    return (
        <View style = {todo_Input.container}  >
            <View style = {todo_Input.Inputcontainer}>
                <TextInput 
                    placeholder = 'What Do You Planning?'
                    onChangeText = {value => setText(value)}
                  />
            </View>
            <TouchableOpacity 
                style = {todo_Input.buttonContainer}
                onPress = {() => props.onTodoEnter(text)}
                >
                <Text style = {todo_Input.buttonText}>ADD TODO</Text>
            </TouchableOpacity>
        </View>

    )
}



export  {TodoInput};