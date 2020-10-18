import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import {todo_card} from '../styles';

const TodoCard = (props) => {
    return (
        <TouchableOpacity 
            style = {todo_card.container}
            //onPress={() => alert(props.data.id)}>
            //onPress={() => props.onDone(props.data.id)}>
            onPress={() => props.onDone()}
            onLongPress={() => props.onRemove()}
        >
            <Text style={[
                todo_card.text,
                { textDecorationLine: props.data.isDone ? 'line-through' : null }
            ]}>{props.data.todo}</Text>
        </TouchableOpacity>

    )
}
export {TodoCard}










