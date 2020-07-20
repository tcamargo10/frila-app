import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IconAvatar from '../../../../assets/images/avatar.png';
import {Appbar, Searchbar} from 'react-native-paper';

import {
  Container,
  Header,
  Input,
  Body,
  Card,
  Distancia,
  Separador,
  Perfil,
  Avatar,
  Info,
  Nome,
  Stars,
  Status,
  Categoria,
  CheckStatus,
  ContainerLeft,
  ContainerRight,
  ContainerSeparador,
} from './styles';

const Profissionais = ({route, navigation: {goBack}}) => {
  const navigation = useNavigation();

  const [list, setList] = useState({
    dados: [
      {
        id: 1,
        nome: 'Lucas Oliveira',
        distancia: 8,
        status: true,
        categoria: 'Programador',
        atendimentos: 18,
        descricao:
          'Especializado em programação Java e C++. Desenolvimento de sites. Desenvolvimento de aplicativos Androis e IOS.',
      },
      {
        id: 2,
        nome: 'João Silva',
        distancia: 8,
        status: true,
        categoria: 'Programador',
        atendimentos: 18,
        descricao:
          'Especializado em programação Java e C++. Desenolvimento de sites. Desenvolvimento de aplicativos Androis e IOS.',
      },
      {
        id: 3,
        nome: 'Humberto Henrique',
        distancia: 8,
        status: false,
        categoria: 'Programador',
        atendimentos: 18,
        descricao:
          'Especializado em programação Java e C++. Desenolvimento de sites. Desenvolvimento de aplicativos Androis e IOS.',
      },
      {
        id: 4,
        nome: 'João Silva',
        distancia: 8,
        status: true,
        categoria: 'Programador',
        atendimentos: 18,
        descricao:
          'Especializado em programação Java e C++. Desenolvimento de sites. Desenvolvimento de aplicativos Androis e IOS.',
      },
      {
        id: 5,
        nome: 'Humberto Henrique',
        distancia: 8,
        status: false,
        categoria: 'Programador',
        atendimentos: 18,
        descricao:
          'Especializado em programação Java e C++. Desenolvimento de sites. Desenvolvimento de aplicativos Androis e IOS.',
      },
      {
        id: 6,
        nome: 'João Silva',
        distancia: 8,
        status: true,
        categoria: 'Programador',
        atendimentos: 18,
        descricao:
          'Especializado em programação Java e C++. Desenolvimento de sites. Desenvolvimento de aplicativos Androis e IOS.',
      },
    ],
  });
  const [input, setInput] = useState(route.params?.categoria);

  function click(perfil) {
    return navigation.navigate('DetalhesProfissional', {perfil: perfil});
  }

  return (
    <>
      <Appbar.Header style={{backgroundColor: '#4169E1'}}>
        <Appbar.BackAction onPress={() => goBack()} />
        <Appbar.Content title="Profissionais" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>

      <Container>
        <Header>
          <Searchbar
            placeholder="Qual serviço você precisa?"
            onChangeText={(value) => setInput(value)}
            value={input}
          />
        </Header>

        <Body>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={list.dados}
            keyExtractor={(value) => String(value.id)}
            renderItem={({item}) => (
              <Card
                onPress={() => {
                  click(item);
                }}>
                <ContainerLeft>
                  <Distancia>{item.distancia}</Distancia>
                  <Distancia>km</Distancia>
                </ContainerLeft>
                <ContainerSeparador>
                  <Separador />
                </ContainerSeparador>
                <Perfil>
                  <Avatar source={IconAvatar} />
                  <Info>
                    <Nome>{item.nome}</Nome>
                    <Stars>* * * * *</Stars>
                    <Categoria>{item.categoria}</Categoria>
                  </Info>
                  <CheckStatus />
                </Perfil>
                <ContainerRight>
                  <Status textColor={item.status ? 'green' : 'red'}>
                    {item.status ? 'Online' : 'Offline'}
                  </Status>
                </ContainerRight>
              </Card>
            )}
          />
        </Body>
      </Container>
    </>
  );
};

export default Profissionais;
