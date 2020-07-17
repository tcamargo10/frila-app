import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Equipe from '../../../assets/images/equipe.png';
import Check from '../../../assets/images/check.png';

import {
  Container,
  Description,
  Bold,
  ContainerForm,
  Button,
  TextButton,
  Title,
  Box,
  Icone,
  Image,
} from './styles';

const CadastroFinal = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ContainerForm>
        <Title>Enfim finalizamos :)</Title>

        <Box>
          <Icone source={Check} resizeMode="contain" />
          <Description>
            <Bold>Agora deixe com a gente</Bold>, pois nossa equipe irá realizar
            analise de todas as informações fornecidas.
          </Description>
        </Box>

        <Description>
          <Bold>Fique ligado!</Bold> em breve lhe comunicaremos por e-mail se
          seu cadastro foi aprovado ou não. O prazo para retorno é de até 48h.
        </Description>
      </ContainerForm>

      <Image source={Equipe} resizeMode="contain" />

      <Button
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <TextButton>FINALIZAR</TextButton>
      </Button>
    </Container>
  );
};

export default CadastroFinal;
