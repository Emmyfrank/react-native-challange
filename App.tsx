import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native"
import LoginScreen from './screens/LoginScreen';
import SignupSCreen from './screens/SignupSCreen';
import WelcomeScreen from './screens/WelcomeScreen';
import Provider from './context/Provider';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    

      <Provider>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='/' component={WelcomeScreen}/>
          <Stack.Screen name='login' component={LoginScreen}/>
          <Stack.Screen name='signup' component={SignupSCreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
      
  );
}

//navigationn container
  //naviagtor
    //screens


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
