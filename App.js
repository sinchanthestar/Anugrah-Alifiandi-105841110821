import { useFonts} from 'expo-font';
import { Text, View } from 'react-native';//usefonts
export default function App() {
  const [dapatFont] = useFonts({
    'MetroBlack' : require('./assets/fonts/Metropolis-Black.otf'),
    'MetroBold' : require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroLight' : require('./assets/fonts/Metropolis-Light.otf'),
    'MetroMedium' : require('./assets/fonts/Metropolis-Medium.otf'),
    'MetroSemiBold' : require('./assets/fonts/Metropolis-SemiBold.otf'),
  });
  if(!dapatFont) return <Text>Font Tidak ditemukan ...</Text>
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontFamily: 'MetroBlack'}}>Font Metro Black</Text>
      <Text style={{ fontFamily: 'MetroBold'}}>Font Metro Bold</Text>
      <Text style={{ fontFamily: 'MetroLight'}}>Font Metro Light</Text>
      <Text style={{ fontFamily: 'MetroMedium'}}>Font Metro Medium</Text>
      <Text style={{ fontFamily: 'MetroSemiBold'}}>Font Metro SemiBold</Text>
    </View>
  );
}