import React from 'react';
import {Container, Text} from './styles';

const Button = ({titulo, cor}) => {
  return (
    <Container cor={cor}>
      <Text> {titulo} </Text>
    </Container>
  );
};

export default Button;
