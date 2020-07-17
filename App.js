import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Logo from './assets/images/logo.png';

import Splash from './src/pages/Splash';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import CadastroFinal from './src/pages/CadastroFinal';
import CadastroDocs from './src/pages/CadastroDocs';

const Stack = createStackNavigator();

function LogoHeader() {
  return <Image style={{width: 60, height: 60}} source={Logo} />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerStyle: {height: 80},
            headerTitle: (props) => <LogoHeader {...props} />,
          }}
        />
        <Stack.Screen
          name="CadastroFinal"
          component={CadastroFinal}
          options={{
            headerStyle: {height: 80},
            headerTitle: (props) => <LogoHeader {...props} />,
          }}
        />
        <Stack.Screen
          name="CadastroDocs"
          component={CadastroDocs}
          options={{
            headerStyle: {height: 80},
            headerTitle: (props) => <LogoHeader {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
