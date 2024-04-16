import { Image, Text } from "react-native";
import { style } from "./Header.style";
import headerLogo from "../../assets/logo.png";

/**
 * Header component.
 *
 * @return {JSX.Element} Header component.
 *
 * @constructor
 */
export function Header() {
  return (
    <>
      <Image source={headerLogo} style={style.img} resizeMode={"contain"} />
      <Text style={style.subtitle}>You probably have something to do</Text>
    </>
  );
}
