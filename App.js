import { Main } from './src/components/Main'
import { NativeRouter } from 'react-router-native';
import { View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View>
      <StatusBar></StatusBar>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </View>
  );
}
