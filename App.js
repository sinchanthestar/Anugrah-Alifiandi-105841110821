import { StyleSheet, Text, View, Image, ScrollView }from 'react-native';
import React from 'react';
import ButtonComponent from './component/button/button';

const App = () => {
 return (
  <View style={{
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <Image
    source={require('./assets/hijau.jpg')}
    style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 15,
      opacity: 0.4,
      zIndex: -1,
    }}
    resizeMode="cover"
    />
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
        <Image
        source={require('./assets/line.png')}
        style={{
          width: 150,
          height: 112,
          marginTop: 20,
          opacity: 1,
          zIndex: 1,
        }}
        resizeMode="cover"
        />
        <Text style={{
          fontSize: 20,
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          color: 'white',
          position: 'center',
          top: 0,
          marginTop: 325,
        }}>Welcome To Line</Text>

        <Text style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'absolute',
          border: 'solid',
          marginTop: 20,
        }}>Communication applications that connect one person to another are equipped with various services that make life easier every day. </Text>
          
          <Text style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'div',
            marginTop: 20,
          }}>Free application that makes it possible to send text messages, voice messages, voice calls, send pictures, videos and so on, if we are connected to the internet.</Text>
           
           <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 40,
           }}>
                <ButtonComponent title="Sign In" color="green"/>
                <ButtonComponent title="Sign Up" color="green"/>
                </View>
                </ScrollView>
                </View>
                );
              }

export default App;