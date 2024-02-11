import 'react-native-gesture-handler';


import { StatusBar, View } from 'react-native';
import Navigator from './Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import * as SplashScreen from "expo-splash-screen"

import { useCallback } from 'react';



export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'bold': require('./assets/fonts/Quicksand-Bold.ttf'),
    'light': require('./assets/fonts/Quicksand-Light.ttf'),
    'regular': require('./assets/fonts/Quicksand-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View className="flex flex-1 "  >
      <StatusBar barStyle={"dark-content"} />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </View>
  );
}

