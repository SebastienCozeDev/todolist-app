import {Image, Text} from "react-native";
import {style} from "./Header.style";
import headerLogo from "../../assets/logo.png";

export function Header() {
  return (
    <>
      <Image source={headerLogo} style={style.img} resizeMode={"contain"} />
      <Text style={style.subtitle}>You probably have something to do</Text>
    </>
  );
}