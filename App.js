import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {Text, View} from "react-native";
import React from "react";
import {style} from "./App.style";
import {Header} from "./components/Header/Header";
import {CardTodo} from "./components/CardTodo/CardTodo";

const TODO_LIST = [
  {
    title: "Buy milk",
    isCompleted: true,
  },
  {
    title: "Walk the dog",
    isCompleted: false,
  },
  {
    title: "Do homework",
    isCompleted: true,
  },
  {
    title: "Go to the gym",
    isCompleted: true,
  }
];

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={style.app}>
          <View style={style.header}>
            <Header />
          </View>
          <View style={style.body}>
            <CardTodo todo={TODO_LIST[0]} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={style.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
