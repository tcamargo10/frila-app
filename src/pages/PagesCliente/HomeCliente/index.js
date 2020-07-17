import React from 'react';
import {useNavigation} from '@react-navigation/native';
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
  const navigation = useNavigation();

  function click(categoria) {
    return navigation.navigate('Profissionais', {categoria: categoria});
  }

  return (
    <Container>
      <Header>
        <Logo source={logo} resizeMode="contain" />

        <Title>Qual serviço você precisa?</Title>
      </Header>

      <Body>
        <ContainerCard>
          <Card onPress={() => click('assistencia tecnica')}>
            <Icon source={icone} resizeMode="contain" />
            <Text>Assitência técnica</Text>
          </Card>

          <Card onPress={() => click('eventos')}>
            <Icon source={icone} resizeMode="contain" />
            <Text>Eventos</Text>
          </Card>

          <Card onPress={() => click('moda e beleza')}>
            <Icon source={icone} resizeMode="contain" />
            <Text>Moda e Beleza</Text>
          </Card>

          <Card onPress={() => click('consultoria')}>
            <Icon source={icone} resizeMode="contain" />
            <Text>Consultoria</Text>
          </Card>
        </ContainerCard>

        <ContainerCard>
          <Card onPress={() => click('reforma')}>
            <Icon source={icone} resizeMode="contain" />
            <Text>Reforma</Text>
          </Card>

          <Card onPress={() => click('serviços domesticos')}>
            <Icon source={icone} resizeMode="contain" />
            <Text>Serviços domésticos</Text>
          </Card>

          <Card onPress={() => click('aula particular')}>
            <Icon source={icone} resizeMode="contain" />
            <Text>Aula particular</Text>
          </Card>

          <Card onPress={() => click('tecnologia')}>
            <Icon source={icone} resizeMode="contain" />
            <Text>Tecnologia</Text>
          </Card>
        </ContainerCard>
      </Body>
    </Container>
  );
};

export default HomeCliente;
