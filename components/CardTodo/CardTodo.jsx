import {Text, TouchableOpacity, Image} from "react-native";
import checkImg from "../../assets/check.png";
import React from "react";
import {style} from "./CardTodo.style";

export function CardTodo(props) {
  return (
    <TouchableOpacity style={style.card}>
      <Text
        style={[
          style.text,
          props.todo.isCompleted && { textDecorationLine: "line-through" }
        ]}
      >
        {props.todo.title}
      </Text>
      { props.todo.isCompleted && <Image source={checkImg} style={style.img}/>}
    </TouchableOpacity>
  );
}