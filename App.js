import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import Camera from './pages/camera';
import SoilType from './pages/soiltype';
import About from './pages/about';
import Terms from './pages/terms';
import CropSuggestions from './pages/cropsuggestions';
import { StyleSheet } from 'react-native';
import ImageViewer from './pages/imageviewer';
import Aboutapp from './pages/aboutapp';
import Privacy from './pages/privacy';
import Logout from './pages/logout';

const Stack = createStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="camera" component={Camera} />
        <Stack.Screen name="SoilType" component={SoilType} />
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Imageviewer" component={ImageViewer} />
        <Stack.Screen name="CropSuggestions" component={CropSuggestions}/>
        <Stack.Screen name="Terms" component={Terms}/>
        <Stack.Screen name="Aboutapp" component={Aboutapp}/>
        <Stack.Screen name="Privacy" component={Privacy}/>
        <Stack.Screen name="Logout" component={Logout}/>
        
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
