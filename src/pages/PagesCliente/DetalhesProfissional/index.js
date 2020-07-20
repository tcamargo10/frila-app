import React, {useState} from 'react';
import {Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import IconAvatar from '../../../../assets/images/avatar.png';

import {
  Container,
  CardPerfil,
  BoxLeft,
  Avatar,
  Nome,
  Categoria,
  Separador,
  BoxRight,
  Quantidade,
  TextAtendimento,
  Satisfacao,
  PerfilVerificado,
  Body,
  Descricao,
  Text,
  TextComentario,
  CardComentario,
  BoxData,
  BoxInfo,
  Stars,
  TitleComentario,
  Comentario,
  ContainerAvatar,
  BoxAtendimento,
  Button,
  TextButton,
  BoxMaisComentarios,
} from './styles';

const DetalhesProfissional = ({route, navigation: {goBack}}) => {
  const [perfil, setPerfil] = useState(route.params?.perfil);

  const navigation = useNavigation();

  return (
    <>
      <Appbar.Header style={{backgroundColor: '#4169E1'}}>
        <Appbar.BackAction onPress={() => goBack()} />
        <Appbar.Content title="Detalhes do Profissional" />
      </Appbar.Header>

      <Container>
        <CardPerfil>
          <BoxLeft>
            <ContainerAvatar>
              <Avatar source={IconAvatar} resizeMode="contain" />
            </ContainerAvatar>
            <Nome>{perfil.nome}</Nome>
            <Categoria>{perfil.categoria}</Categoria>
          </BoxLeft>

          <Separador></Separador>

          <BoxRight>
            <BoxAtendimento>
              <Quantidade>{perfil.atendimentos}</Quantidade>

              <TextAtendimento>{`Atendimentos\n    realizados`}</TextAtendimento>
            </BoxAtendimento>
            <Satisfacao>Satisfação dos usuários</Satisfacao>
            <PerfilVerificado>Perfil Verificado</PerfilVerificado>
          </BoxRight>
        </CardPerfil>

        <Body>
          <Descricao>{perfil.descricao}</Descricao>
        </Body>

        <TextComentario>Último comentário</TextComentario>

        <CardComentario>
          <BoxData>
            <Text>19</Text>
            <Text>JUN</Text>
            <Text>2020</Text>
          </BoxData>

          <Separador></Separador>

          <BoxInfo>
            <TitleComentario>João Carlos</TitleComentario>
            <Stars>*****</Stars>
            <Comentario>
              O João Carlos é um excelente profissional, efetuou o serviço com
              destreza e rapidez. Profissional pontual. Altamente satisfeito.
              Recomendo !!!!
            </Comentario>
          </BoxInfo>
        </CardComentario>

        <BoxMaisComentarios>
          <TextComentario>Ver outros comentários</TextComentario>
        </BoxMaisComentarios>
      </Container>

      <Button
        onPress={() => {
          navigation.navigate('CadastroSequencia');
        }}>
        <TextButton>SOLICITAR PROFISSIONAL</TextButton>
      </Button>
    </>
  );
};

export default DetalhesProfissional;
