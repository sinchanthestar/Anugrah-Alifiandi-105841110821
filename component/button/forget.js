import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const ButtonComponent = ({ title, color, onPress }) => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            width: 150,
            height: 50,
            color: "white",
            backgroundColor: color,
            textAlign: "center",
            lineHeight: 50,
            fontSize: 20,
            borderRadius: 10,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const handleForgetPassword = () => {
    // Add your forget password logic here
    console.log("Forget Password button pressed");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ButtonComponent
        title="Forget Password"
        color="blue"
        onPress={handleForgetPassword}
      />
    </View>
  );
};

export default App;
