import EStyleSheet from "react-native-extended-stylesheet"

export default EStyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: "50%",
    alignSelf: "center",
  },
  text: {
    color: "$primaryOrange",
    fontWeight: "600",
  },
})
