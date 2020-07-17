import React, {useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import IconAvatar from '../../../../assets/images/avatar.png';
import dados from './prof.json';

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

const Profissionais = ({route}) => {
  const [list, setList] = useState({
    dados: [
      {
        id: 1,
        nome: 'Lucas Oliveira',
        distancia: 8,
        status: true,
        categoria: 'Programador',
      },
      {
        id: 2,
        nome: 'João Silva',
        distancia: 8,
        status: true,
        categoria: 'Programador',
      },
      {
        id: 3,
        nome: 'Humberto Henrique',
        distancia: 8,
        status: false,
        categoria: 'Programador',
      },
      {
        id: 4,
        nome: 'João Silva',
        distancia: 8,
        status: true,
        categoria: 'Programador',
      },
      {
        id: 5,
        nome: 'Humberto Henrique',
        distancia: 8,
        status: false,
        categoria: 'Programador',
      },
      {
        id: 6,
        nome: 'João Silva',
        distancia: 8,
        status: true,
        categoria: 'Programador',
      },
    ],
  });
  const [input, setInput] = useState(route.params?.categoria);

  return (
    <Container>
      <Header>
        <Input onChangeText={(value) => setInput(value)} value={input} />
      </Header>

      <Body>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list.dados}
          keyExtractor={(value) => String(value.id)}
          renderItem={({item}) => (
            <Card>
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
  );
};

export default Profissionais;
