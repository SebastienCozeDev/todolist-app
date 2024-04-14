import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {Alert, ScrollView, Text, View} from "react-native";
import React, {useEffect} from "react";
import {style} from "./App.style";
import {Header} from "./components/Header/Header";
import {CardTodo} from "./components/CardTodo/CardTodo";
import {TabBottomMenu} from "./components/TabBottomMenu/TabBottomMenu";
import {ButtonAdd} from "./components/ButtonAdd/ButtonAdd";
import Dialog from "react-native-dialog";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";


let isFirstRender = true;
let isLoadUpdate = false;

/**
 * Main component of the application.
 *
 * @return {JSX.Element} The main component of the application.
 *
 * @constructor
 */
export default function App() {
  const [selectedTabName, setSelectedTabName] = React.useState("all");
  const [todoList, setTodoList] = React.useState([]);
  const [isAddDialogVisible, setIsAddDialogVisible] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const scrollViewRef = React.useRef();

  useEffect(() => {
    loadTodoList().then(r => "Loaded");
  }, []);

  useEffect(() => {
    if (isLoadUpdate) {
      isLoadUpdate = false;
    } else {
      if (!isFirstRender) {
        saveTodoList().then(r => "Saved");
      } else {
        isFirstRender = false;
      }
    }
  }, [todoList]);

  /**
   * Saves the todo list to the local storage.
   *
   * @return {Promise<void>} A promise that resolves when the list is saved.
   */
  async function saveTodoList() {
    try {
      await AsyncStorage.setItem("@todolistcozedev", JSON.stringify(todoList));
    } catch (e) {
      alert("Failed to save the list");
    }
  }

  /**
   * Loads the todo list from the local storage.
   *
   * @return {Promise<void>} A promise that resolves when the list is loaded.
   */
  async function loadTodoList() {
    try {
      const stringifiedTodoList = await AsyncStorage.getItem("@todolistcozedev");
      if (stringifiedTodoList !== null) {
        isLoadUpdate = true;
        setTodoList(JSON.parse(stringifiedTodoList));
      }
    } catch (e) {
      alert("Failed to save the list");
    }
  }

  /**
   * Returns the todo list filtered by the selected tab.
   *
   * @return {*[]} The filtered todo list.
   */
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

  /**
   * Updates the todo list.
   *
   * @param todo The todo to update.
   */
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

  /**
   * Delete a todo.
   *
   * @param todoToDelete The todo to delete.
   */
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

  /**
   * Renders the todo list.
   *
   * @return {[]} The rendered todo list.
   */
  function renderToDoList() {
    return getFilteredList().map((todo) => {
      return (
        <View style={style.cardItem} key={todo.id}>
          <CardTodo onLongPress={deleteTodo} onPress={updateTodo} todo={todo} />
        </View>
      );
    });
  }

  /**
   * Shows the add dialog.
   */
  function showAddDialog() {
    setIsAddDialogVisible(true);
  }

  /**
   * Adds a todo to the list.
   */
  function addTodo() {
    const newTodo = {
      id: uuid.v4(),
      title: inputValue,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
    setIsAddDialogVisible(false);
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={style.app}>
          <View style={style.header}>
            <Header />
          </View>
          <View style={style.body}>
            <ScrollView
              ref={scrollViewRef}
              onContentSizeChange={() => {
                scrollViewRef.current.scrollToEnd({animated: true});
              }}
            >
              {renderToDoList()}
              <Text style={style.cardItemLast}>
              </Text>
            </ScrollView>
          </View>
          <ButtonAdd onPress={showAddDialog} />
        </SafeAreaView>
      </SafeAreaProvider>
      <TabBottomMenu
        todoList={todoList}
        onPress={setSelectedTabName}
        selectedTabName={selectedTabName}
      />
      <Dialog.Container visible={isAddDialogVisible} onBackdropPress={() => setIsAddDialogVisible(false)}>
        <Dialog.Title>Create a task</Dialog.Title>
        <Dialog.Description>Choose a name for the new task</Dialog.Description>
        <Dialog.Input onChangeText={setInputValue} />
        <Dialog.Button disabled={inputValue.trim().length === 0} label={"Create"} onPress={() => addTodo()} />
      </Dialog.Container>
    </>
  );
}
