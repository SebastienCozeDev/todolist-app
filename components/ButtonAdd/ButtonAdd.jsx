import { Text, TouchableOpacity } from "react-native";
import { style } from "./ButtonAdd.style";

/**
 * ButtonAdd component.
 *
 * @param props The properties of the component.
 *
 * @return {JSX.Element} The component.
 *
 * @constructor
 */
export function ButtonAdd(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={style.button}>
      <Text style={style.text}>+ New task</Text>
    </TouchableOpacity>
  );
}
