import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {Alert, ScrollView, Text, View} from "react-native";
import React from "react";
import {style} from "./App.style";
import {Header} from "./components/Header/Header";
import {CardTodo} from "./components/CardTodo/CardTodo";
import {TabBottomMenu} from "./components/TabBottomMenu/TabBottomMenu";


export default function App() {
  const [selectedTabName, setSelectedTabName] = React.useState("all");
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

  function getFilteredList() {
    switch (selectedTabName) {
      case "all":
        return todoList;
      case "inProgress":
        return todoList.filter((todo) => !todo.isCompleted);
      case "done":
        return todoList.filter((todo) => todo.isCompleted);
    }
  }

  function updateTodo(todo) {
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };
    const indexToUpdate = todoList.findIndex(
      (todo) => todo.id === updatedTodo.id
    );
    const updatedTodoList = [...todoList];
    updatedTodoList[indexToUpdate] = updatedTodo;
    setTodoList(updatedTodoList);
  }

  function deleteTodo(todoToDelete) {
    Alert.alert(
      "Deletion",
      "Delete this task?",
      [
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setTodoList(todoList.filter((todo) => todo.id !== todoToDelete.id));
          },
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
    );
  }

  function renderToDoList() {
    return getFilteredList().map((todo) => {
      return (
        <View style={style.cardItem} key={todo.id}>
          <CardTodo onLongPress={deleteTodo} onPress={updateTodo} todo={todo} />
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
        <TabBottomMenu
          todoList={todoList}
          onPress={setSelectedTabName}
          selectedTabName={selectedTabName}
        />
      </View>
    </>
  );
}
