import React from 'react';
import icone from '../../../../assets/images/icon.png';
import logo from '../../../../assets/images/logo.png';

import {
  Container,
  Logo,
  Title,
  ContainerCard,
  Card,
  Icon,
  Text,
  Header,
  Body,
} from './styles';

const HomeCliente = () => {
  return (
    <Container>
      <Header>
        <Logo source={logo} resizeMode="contain" />

        <Title>Qual serviço você precisa?</Title>
      </Header>

      <Body>
        <ContainerCard>
          <Card>
            <Icon source={icone} resizeMode="contain" />
            <Text>Assitência técnica</Text>
          </Card>

          <Card>
            <Icon source={icone} resizeMode="contain" />
            <Text>Eventos</Text>
          </Card>

          <Card>
            <Icon source={icone} resizeMode="contain" />
            <Text>Moda e Beleza</Text>
          </Card>

          <Card>
            <Icon source={icone} resizeMode="contain" />
            <Text>Consultoria</Text>
          </Card>
        </ContainerCard>

        <ContainerCard>
          <Card>
            <Icon source={icone} resizeMode="contain" />
            <Text>Reforma</Text>
          </Card>

          <Card>
            <Icon source={icone} resizeMode="contain" />
            <Text>Serviços domésticos</Text>
          </Card>

          <Card>
            <Icon source={icone} resizeMode="contain" />
            <Text>Aula particular</Text>
          </Card>

          <Card>
            <Icon source={icone} resizeMode="contain" />
            <Text>Tecnologia</Text>
          </Card>
        </ContainerCard>
      </Body>
    </Container>
  );
};

export default HomeCliente;
