import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Logo from './assets/images/logo.png';

import Splash from './src/pages/Splash';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import CadastroTermos from './src/pages/CadastroTermos';
import CadastroSequencia from './src/pages/CadastroSequencia';
import CadastroFinal from './src/pages/CadastroFinal';
import HomeCliente from './src/pages/PagesCliente/HomeCliente';
import Profissionais from './src/pages/PagesCliente/Profissionais';
import DetalhesProfissional from './src/pages/PagesCliente/DetalhesProfissional';

const Stack = createStackNavigator();

function LogoHeader() {
  return (
    <Image
      style={{height: 70, width: 300}}
      resizeMode="contain"
      source={Logo}
    />
  );
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
          name="CadastroTermos"
          component={CadastroTermos}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CadastroSequencia"
          component={CadastroSequencia}
          options={{
            headerShown: false,
          }}
          /*options={{
            headerStyle: {height: 90},
            headerTitle: (props) => <LogoHeader {...props} />,
          }}*/
        />
        <Stack.Screen
          name="CadastroFinal"
          component={CadastroFinal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeCliente"
          component={HomeCliente}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profissionais"
          component={Profissionais}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetalhesProfissional"
          component={DetalhesProfissional}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
