import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Text} from './styles';

import facebook from '../../../assets/images/facebook.jpg';
import google from '../../../assets/images/google.jpg';

const Button = ({titulo, cor}) => {
  return (
    <Container cor={cor}>
      <Text> {titulo} </Text>
    </Container>
  );
};

export default Button;
