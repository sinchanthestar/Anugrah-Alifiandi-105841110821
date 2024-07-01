import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Anugrah Alifiandi</Text>
      <Text style={{
        fontSize: 20,
        fontStyle: 'Times New Roman',
        textDecorationLine: 'underline',
        color: 'black',       
      }}> Text Ukuran 20!</Text>
      <Text style={{
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'
      }}>Anugrah Alifiandi </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});