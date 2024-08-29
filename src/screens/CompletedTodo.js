import React, { useEffect } from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import { styles } from "../shared/styles";
import { useSelector } from "react-redux";
import TodoCont from "../components/TodoCont";

export default function CompletedTodo() {
  const {todos}=useSelector(state=>state.todos)

  return (

    <View style={styles.container}>
          <FlatList
        style={styles.listContainer}
        data={todos.filter(todo=>todo.completed)}
        renderItem={({ item }) => <TodoCont item={item} />}
        keyExtractor={(item) => item.id}
    /></View>
  );
}
