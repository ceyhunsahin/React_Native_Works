import React, {useState} from 'react';
import { SafeAreaView, View, Text,Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler'

export default first = (props)=>{
    const number = 55;
    const [userName, setUserName] = useState("");
    return(
        <SafeAreaView>
            <View>
                <Text style = {{fontSize:40}}>First Hello</Text>

                <Text style = {{fontSize:40}}>{number}</Text>
                <Text style = {{ margin : 10, fontWeight:'bold'}}>Girilen deger : {userName}</Text>

                <View style = {{ backgroundColor : '#e0e0e0', padding : 10, margin : 10, borderRadius : 5}}>
                    <TextInput
                    value = {userName}
                    onChangeText = {text => setUserName(text)}
                   

                    />
                </View>
                <Button 
                title = 'GO!'
                onPress = {()=> props.navigation.
                    navigate('SecondPage',{
                    myNumber : number,
                    //userName : 'Clarusway'
                    selectedValue : userName,
                    
     
                })}
                />

            </View>
        </SafeAreaView>
    )
}