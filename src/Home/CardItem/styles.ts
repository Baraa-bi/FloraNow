import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.3,
    height: height * 0.25,
    padding: 15,
    margin: 15
  },
  titleContainer: {
    height: 40,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#CFD8DC"
  },
  subContainer: {
    flex: 1,
    flexDirection: "row"
  },
  subTitleContainer: {
    height: 20,
    width: 100,
    marginRight: 5,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#CFD8DC"
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.3,
    borderRadius: 100,
    left: -15,
    backgroundColor: "#00B8D4"
  },
  removeContainer: {
    width: 40,
    height: 40,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "white",
    borderColor: "grey",
    right: -5,
    borderWidth: 3
  },
  price: {
    fontSize: 50,
    color: "grey"
  },
  buttonsContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  countContainer: {
    width: 70,
    height: 70,
    zIndex: -1,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35
  },
  count: {
    fontSize: 30,
    color: "grey"
  }
});
