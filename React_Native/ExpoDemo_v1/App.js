import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainView from "./view/MainView";

export default function App() {
  return <MainView />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
