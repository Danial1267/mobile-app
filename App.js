import { SafeAreaView, StatusBar } from 'react-native';
import { HomeScreen } from './Screen/HomeScreen';
import { LogInScreen } from './Screen/LogInScreen';

export default function App() {
  return (
    <SafeAreaView>
        <HomeScreen />
        <LogInScreen />
      <StatusBar />
    </SafeAreaView>
  );
};