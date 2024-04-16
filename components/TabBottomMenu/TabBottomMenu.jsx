import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./TabBottomMenu.style";

/**
 * TabBottomMenu component.
 *
 * @param props Props for the component.
 *
 * @return {JSX.Element} TabBottomMenu component.
 *
 * @constructor
 */
export function TabBottomMenu(props) {
  const countByStatus = props.todoList.reduce(
    (acc, todo) => {
      todo.isCompleted ? acc.done++ : acc.inProgress++;
      return acc;
    },
    { all: props.todoList.length, inProgress: 0, done: 0 },
  );

  function getTextStyle(tabName) {
    return {
      fontWeight: "bold",
      color: tabName === props.selectedTabName ? "#2F76E5" : "black",
    };
  }

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => props.onPress("all")}>
        <Text style={getTextStyle("all")}>All ({countByStatus.all})</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPress("inProgress")}>
        <Text style={getTextStyle("inProgress")}>
          In progress ({countByStatus.inProgress})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPress("done")}>
        <Text style={getTextStyle("done")}>Done ({countByStatus.done})</Text>
      </TouchableOpacity>
    </View>
  );
}
