import { SafeAreaView, StatusBar } from 'react-native';
import Cesta from './src/screen/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { cesta } from './src/mocks/cesta';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fonteLoaded] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold
  })

  if (!fonteLoaded) return <AppLoading />

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...cesta} />
    </SafeAreaView>
  );
}

