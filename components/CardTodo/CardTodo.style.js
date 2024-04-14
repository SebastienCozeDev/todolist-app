import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  card: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    height: 115,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 25,
  },
  img: {
    height: 25,
    width: 25,
  },
});
