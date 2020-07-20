import React from 'react';
import {Appbar} from 'react-native-paper';
import Logo_Img from '../../../assets/images/logo.png';
import avatar_img from '../../../assets/images/avatar.png';
import map_icon from '../../../assets/images/map_icon.png';

import {
  Container,
  ContainerLogo,
  Logo,
  Titulo,
  BoxButtons,
  Button,
  TextButton,
  CardVazio,
  Card,
  BoxLeft,
  Avatar,
  Valor,
  BoxRight,
  Header,
  TitleCard,
  Cliente,
  Body,
  Icon,
  BoxInfo,
  Data,
  Local,
} from './styles';

const MeusServicos = ({navigation: {goBack}}) => {
  return (
    <>
      <Appbar.Header style={{backgroundColor: '#4169E1'}}>
        <Appbar.BackAction onPress={() => goBack()} />
        <Appbar.Content title="Meus serviços" color={'#FFF'} />
      </Appbar.Header>

      <Container>
        <ContainerLogo>
          <Logo source={Logo_Img} resizeMode="contain" />
        </ContainerLogo>
        <Titulo>Meus serviços :)</Titulo>

        <BoxButtons>
          <Button>
            <TextButton>Solicitações</TextButton>
          </Button>
          <Button>
            <TextButton>Em atendimento</TextButton>
          </Button>
          <Button>
            <TextButton>Atendidos</TextButton>
          </Button>
        </BoxButtons>

        <Card>
          <BoxLeft>
            <Avatar source={avatar_img} resizeMode="contain" />
            <Valor>R$150,00</Valor>
          </BoxLeft>

          <BoxRight>
            <Header>
              <TitleCard>Aplicativo para celular e rede sociais</TitleCard>
              <Cliente>Fernando Magno</Cliente>
            </Header>
            <Body>
              <Icon source={map_icon} resizeMode="contain" />
              <BoxInfo>
                <Data>Data: 29/04/2020 Horario 20:15h</Data>
                <Local>Canaã dos Carajás - PA</Local>
              </BoxInfo>
            </Body>
          </BoxRight>
        </Card>

        <CardVazio></CardVazio>
        <CardVazio></CardVazio>
      </Container>
    </>
  );
};

export default MeusServicos;
