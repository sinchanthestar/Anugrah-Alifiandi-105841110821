import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet } from 'react-native';
import LoginWithEmail from './component/LoginWithEmail'; // Adjust path
import LoginWithPhone from './component/LoginWithPhone'; // Adjust path

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14 },
        tabBarItemStyle: { width: 'auto' },
        tabBarStyle: { backgroundColor: '#white', elevation: 0 },
        tabBarIndicatorStyle: { backgroundColor: '#white' },
        tabBarContentContainerStyle: { justifyContent: 'center' },
      }}
    >
      <Tab.Screen name="Email" component={LoginWithEmail} />
      <Tab.Screen name="Phone" component={LoginWithPhone} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default TabNavigator;
