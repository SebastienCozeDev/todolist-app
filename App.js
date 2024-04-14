import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>My application</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
