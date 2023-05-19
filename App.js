import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './pages/Login.js'
import Second from './pages/Second.js'
export default function App() {

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={Login} />
          <Stack.Screen name='second' component={Second}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}


