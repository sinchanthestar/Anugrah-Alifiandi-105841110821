import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import ButtonComponent from "../button/button";  // Sesuaikan jalur impor ButtonComponent
import Inputan from "../TextInput/input";       // Sesuaikan jalur impor Inputan

const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ForgotPassword />
    <Text>Login Screen</Text>
    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
      <Text>Go to Sign Up</Text>
    </TouchableOpacity>
    
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
          marginBottom: 60,
          marginTop: 40,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 50,
          }}
        >
          Login
        </Text>
      </View>

      <View
        style={{
          marginBottom: 10,
        }}
      >
        <Inputan name="Email" color="black" />
        <Inputan name="Password" color="black" />

        <TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              color: "black",
              marginTop: 5,
              marginBottom: 50,
              textAlign: "right",
            }}
          >
            Forgot your Password?
          </Text>
        </TouchableOpacity>
      </View>
      <ButtonComponent title="LOGIN" color="black" onPress={() => {}} />
        
      <Text
        style={{
          fontSize: 14,
          color: "black",
          textAlign: "center",
          marginTop: 90,
          marginBottom: 20,
        }}
      >
        Or login with social account
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            width: 92,
            height: 64,
            marginHorizontal: 10,
          }}
        >
          <Image
            source={require("../../assets/line.png")}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            width: 92,
            height: 64,
            marginHorizontal: 10,
          }}
        >
          <Image
            source={require("../../assets/wa.jpg")}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </View>

      <View style={{
        marginTop: 20,
        alignItems: 'center'
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text
            style={{
              fontSize: 16,
              color: "blue",
            }}
          >
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {};

export default Login;
