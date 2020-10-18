import React, {useState} from 'react';
import {SafeAreaView,View,Text,KeyboardAvoidingView, FlatList} from 'react-native';
import {main} from './styles';
import {TodoInput,TodoCard} from './component';

const Main2 = () => {
    const [list,setList] = useState([])
    function addTodo (text) {
        const element = {
            id: list.length,
            todo: text,
            //todo degiskeni yapsak ayni sekilde yazabilirdik suan text de olabilir
            isDone: false
            
        }
        const newArray = [element,...list]
        // bunun yerine newArray = [...list, element] de olabilir
        // push a gerek olmadan, elementi basa yazarsan basa ekler
        // newArray.push(element)

        
        setList(newArray);
        console.log(newArray)


    }
    function doneTodo(todoId) {
        const newArray = [...list];
        const todoIndex = newArray.findIndex(item => item.id == todoId);

        newArray[todoIndex].isDone = !newArray[todoIndex].isDone;

        setList(newArray);
    }

    function removeTodo(todoId) {
        const newArray = [...list];
        const todoIndex = list.findIndex(t => t.id == todoId);

        newArray.splice(todoIndex, 1);
        setList(newArray);
    }

    const renderTodo = ({ item }) => {
        return (
            <TodoCard
                data={item}
                onDone={() => doneTodo(item.id)}
                onRemove={() => removeTodo(item.id)}
            />
        )
    }

    return (
    <SafeAreaView style={main.container}>
        <KeyboardAvoidingView style={main.container} behavior = "padding">
            <View style = {main.banner}>
                <Text style = {main.todoText}>TODO</Text>
                <Text style = {main.todoCount}>{list.length}</Text>
            </View >

            <FlatList
                keyExtractor = {(item,index)=>index.toString()}
                data = {list}
                renderItem = {renderTodo}
                ListEmptyComponent = {() => <Text style = {main.emptycomponent}>Nothing To do...</Text>}

                />
            
            <TodoInput 
            onTodoEnter = {todoText  => addTodo(todoText)}

            />
        </KeyboardAvoidingView >
    </SafeAreaView>
    );
}

export default Main2;

            // <TodoInput onTodoEnter={addTodo} /> bu sekilde de func cagirilabilir
            //onTodoEnter = {(todoText)  => {alert(todoText)}} orjinal