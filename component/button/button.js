import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import TabNavigator from '../../TopTabNavigator'; // Adjust path

const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Tab Navigator at the top */}
      <TabNavigator />


      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
      </View>

      {/* Social Login Section */}
      <Text style={styles.socialLoginText}>Or login with social account</Text>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../../assets/line.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../../assets/wa.jpg")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Sign Up Section */}
      <View style={styles.signUpContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  header: {
    alignItems: 'center',
    marginVertical: 40,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  socialLoginText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 49,
    height: 49,
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 50,
    height: 50,
  },
  signUpContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    height: 50,
  },
  signUpText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default Login;
