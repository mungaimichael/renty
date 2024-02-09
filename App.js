import { StatusBar, View } from 'react-native';
import Navigator from './Navigator';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
    <View className="flex flex-1 "  >
      <StatusBar barStyle={"dark-content"} />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </View>
  );
}

