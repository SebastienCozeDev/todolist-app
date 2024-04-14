import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {ScrollView, Text, View} from "react-native";
import React from "react";
import {style} from "./App.style";
import {Header} from "./components/Header/Header";
import {CardTodo} from "./components/CardTodo/CardTodo";


export default function App() {
  const [todoList, setTodoList] = React.useState([
    {
      id: 1,
      title: "Buy milk",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Walk the dog",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Do homework",
      isCompleted: true,
    },
    {
      id: 4,
      title: "Go to the gym",
      isCompleted: true,
    },
    {
      id: 5,
      title: "Cook dinner",
      isCompleted: false,
    },
    {
      id: 6,
      title: "Call dad",
      isCompleted: false,
    },
    {
      id: 7,
      title: "Read a book",
      isCompleted: false,
    },
    {
      id: 8,
      title: "Go to sleep",
      isCompleted: false,
    },
    {
      id: 9,
      title: "Buy milk",
      isCompleted: true,
    },
  ]);

  function renderToDoList() {
    return todoList.map((todo) => {
      return (
        <View style={style.cardItem} key={todo.id}>
          <CardTodo todo={todo} />
        </View>
      );
    });
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={style.app}>
          <View style={style.header}>
            <Header />
          </View>
          <View style={style.body}>
            <ScrollView>{renderToDoList()}</ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={style.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
