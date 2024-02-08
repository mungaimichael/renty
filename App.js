import { StatusBar, View } from 'react-native';
import Navigator from './Navigator';



export default function App() {
  return (
    <View className="flex flex-1 h-screen w-screen bg-slate-900" >
      <Navigator />
      <StatusBar barStyle={"default"} />
    </View>
  );
}

