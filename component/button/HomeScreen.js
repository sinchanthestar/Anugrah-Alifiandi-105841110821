// component/button/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="LoginPages"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Forget Password"
        onPress={() => navigation.navigate('ForgotPassword')}
      />
    </View>
  );
}

export default HomeScreen;
