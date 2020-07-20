import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Switch, TouchableOpacity} from 'react-native';
import Logo_Img from '../../../assets/images/logo.png';
import Button from '../../components/Button';

import {
  Container,
  GroupTop,
  Text,
  Logo,
  ContainerLogo,
  ButtonTop,
  ContainerBody,
  TextInfo,
  ContainerButton,
  Linha,
  Email,
  GroupLinha,
  GroupEmail,
} from './styles';

const Login = () => {
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <Container>
      <GroupTop>
        <ButtonTop onPress={() => {}}>
          <Text>Ajuda</Text>
        </ButtonTop>

        <ButtonTop onPress={() => {}}>
          <Text>Politica de Privacidade</Text>
        </ButtonTop>
      </GroupTop>

      <ContainerBody>
        <ContainerLogo>
          <Logo source={Logo_Img} resizeMode="contain" />
        </ContainerLogo>

        <TextInfo>Acessar com minha conta do:</TextInfo>

        <ContainerButton onPress={() => {}}>
          <Button titulo="Facebook" cor="#00008B" />
        </ContainerButton>

        <ContainerButton onPress={() => {}}>
          <Button titulo="Google" cor="#1E90FF" />
        </ContainerButton>

        <GroupEmail>
          <Email>Receber e-mail de comunicados e ofertas</Email>
          <Switch
            onValueChange={() => {
              setIsEnabled(!isEnabled);
            }}
            value={isEnabled}
          />
        </GroupEmail>

        <GroupLinha>
          <Linha />
          <Text> ou </Text>
          <Linha />
        </GroupLinha>

        <ContainerButton
          onPress={() => {
            navigation.navigate('HomeCliente');
          }}>
          <Button titulo="Acessar minha conta" cor="#FF0000" />
        </ContainerButton>

        <ButtonTop
          onPress={() => {
            navigation.navigate('CadastroTermos');
          }}>
          <Text>Ainda não tenho cadastro!</Text>
        </ButtonTop>
      </ContainerBody>
    </Container>
  );
};

export default Login;
