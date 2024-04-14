import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {Text, View} from "react-native";
import React from "react";
import {style} from "./App.style";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={style.app}>
          <View style={style.header}>
            <Text>Header</Text>
          </View>
          <View style={style.body}>
            <Text>Body</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={style.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
