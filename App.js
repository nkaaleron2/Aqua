import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants";
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from './screens/SignIn';
import OnboardingScreen from './screens/Onboarding';
import SignUpScreen from './screens/SignUp';
import HomeScreen from './screens/Home';
import BottomNavigator from './components/Navigators/BottomNavigator';
// import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer
        style={{
          flex: 1,
          paddingTop: 40,
        }}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={BottomNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        {/* <BottomNavigator /> */}
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  navigationContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
