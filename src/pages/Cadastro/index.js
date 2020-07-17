import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Logo_Img from '../../../assets/images/logo.png';

import {Container, ContainerLogo, Logo} from './styles';

const Cadastro = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ContainerLogo>
        <Logo source={Logo_Img} />
      </ContainerLogo>
    </Container>
  );
};

export default Cadastro;
