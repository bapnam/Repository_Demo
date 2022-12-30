// import { StatusBar } from "expo-status-bar";
import {
  Button,
  Modal,
  Center,
  FormControl,
  Input,
  NativeBaseProvider,
  Box,
} from "native-base";
import { StyleSheet } from "react-native";

const ViewDemo = () => {
  return (
    <NativeBaseProvider>
      <Box
        alignSelf="center" // bg="primary.500"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg",
        }}
        bg={["red.400", "blue.400"]}
      >
        This is a Box
      </Box>
    </NativeBaseProvider>
  );
};
export default ViewDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
