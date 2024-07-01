import { StyleSheet, Text, View, Image, ScrollView }from 'react-native';
import React from 'react';

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
        justifyContent: 'head',
        alignItems: 'center',
        padding: 20,
      }}>
        <Image
        source={require('./assets/line.png')}
        style={{
          width: 150,
          height: 150,
          marginTop: 50,
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
          marginTop: 300,
        }}>Selamat Datang di LINE</Text>

        <Text style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'bottom',
          marginTop: 30,
        }}>Gunakan LINE dan cari temanmu hingga ke seluruh dunia </Text>
          
          <Text style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            marginTop: 20,
          }}></Text>
           
           <View style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 40,
           }}>
            <View style={{ marginHorizontal: 10 }}>
              <Text style={{
                width: 100,
                height: 50,
                color: 'white',
                backgroundColor: 'green',
                textAlign: 'center',
                lineHeight: 50,
                fontSize: 20,
                borderRadius: 10,
                marginTop: 80,
              }}>Daftar</Text>
              </View>
              <View style={{ marginHorizontal: 20}}>
                <Text style={{
                  width: 100,
                  height: 50,
                  color: 'white',
                  backgroundColor: 'green',
                  textAlign: 'center',
                  lineHeight: 50,
                  fontSize: 20,
                  borderRadius: 10,
                  marginTop: 80,
                }}>Login</Text>
                </View>
                </View>
                </ScrollView>
                </View>
                );
              }

                export default App;


    