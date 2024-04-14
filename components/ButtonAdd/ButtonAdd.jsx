import {Text, TouchableOpacity} from "react-native";
import {style} from "./ButtonAdd.style";

export function ButtonAdd(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={style.button}>
      <Text style={style.text}>+ New task</Text>
    </TouchableOpacity>
  );
}