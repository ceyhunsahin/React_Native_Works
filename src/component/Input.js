import React, {useState} from "react";
import {View, TextInput, StyleSheet, Button, Platform, Dimensions} from "react-native";
const Input = ({holder}) => {
    const [text, setText] = useState('');
    const [counter, setCounter] = useState(0);
    return(
        <View style= {styles.container}>
            <TextInput 
                setText={text => setText(text)}
                placeholder="Enter your today's duty IT man" 
                value={text}
                clearTextOnFocus = {true}
                onChangeText={(currentText) => {
                    setText(currentText)}}
                
            />
            <Button
              title="ADD TODO"
              onPress={() => {
                setCounter(counter + 1)
                
              }}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ECEFF1",
        padding: Platform.OS == "ios" ? 15 : 5,
        margin:10,
        borderRadius: 10,
        marginVertical:30,
    },input:{
    },
    button: {
      width: Dimensions.get("window").width * 0.4,
      alignSelf: "center",
      borderRadius: 200
    }
})
export default Input;