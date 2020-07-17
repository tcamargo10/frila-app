import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Logo_Img from '../../../assets/images/logo.png';
import {TouchableOpacity} from 'react-native';

import {Container, Logo} from './styles';

const Splash = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Logo source={Logo_Img} />
      </TouchableOpacity>
    </Container>
  );
};

export default Splash;
