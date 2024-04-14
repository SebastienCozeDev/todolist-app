import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: .34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
