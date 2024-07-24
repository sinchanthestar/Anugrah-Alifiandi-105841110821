import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import ButtonComponent from "../button/button";  // Sesuaikan jalur impor ButtonComponent
import Inputan from "../TextInput/input";  

const ForgotPassword = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#EEEEEE",
        paddingHorizontal: 30,
        paddingTop: 100,
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 60,
          left: 20,
        }}
      >
        <Image
          source={require("../../assets/kiri.png")}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <View
        style={{
          marginBottom: 100,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 40,
          }}
        >
          Lupa Katasandi
        </Text>
      </View>
      <View
        style={{
          marginBottom: 42,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            marginBottom: 10,
          }}
        >
          Silakan masukkan alamat email Anda. Anda akan menerima tautan untuk
          membuat kata sandi baru melalui email.
        </Text>
        <Inputan name="Email" color="black" />
        <Text
          style={{
            fontSize: 12,
            paddingHorizontal: 20,
            color: "red",
            marginTop: 5,
          }}
        >
          Not a valid email address. Should be your@email.com
        </Text>
      </View>
      <ButtonComponent title="SEND" color="red" />
    </View>
  );
};

export default ForgotPassword;
