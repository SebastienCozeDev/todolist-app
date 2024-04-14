import {Text, TouchableOpacity, View} from "react-native";
import {style} from "./TabBottomMenu.style";

export function TabBottomMenu(props) {

  function getTextStyle(tabName) {
    return {
      fontWeight: "bold",
      color: tabName === props.selectedTabName ? "#2F76E5" : "black",
    }
  }

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => props.onPress("all")}>
        <Text style={getTextStyle("all")}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPress("inProgress")}>
        <Text style={getTextStyle("inProgress")}>In progress</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPress("done")}>
        <Text style={getTextStyle("done")}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}