import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Appbar, Checkbox} from 'react-native-paper';
import Logo_Img from '../../../assets/images/logo.png';
import Button from '../../components/Button';

import {
  Container,
  Logo,
  Descricao,
  Bold,
  ContainerButton,
  Titulo,
  ContainerLogo,
  Box,
  Termo,
  BoxTermo,
} from './styles';

const CadastroTermos = ({navigation: {goBack}}) => {
  const navigation = useNavigation();

  const [checked, setChecked] = useState(false);

  return (
    <>
      <Appbar.Header style={{backgroundColor: '#4169E1'}}>
        <Appbar.BackAction onPress={() => goBack()} />
        <Appbar.Content
          title="Cadastre-se"
          subtitle={'Passo 1'}
          color={'#FFF'}
        />
      </Appbar.Header>

      <Container>
        <ContainerLogo>
          <Logo source={Logo_Img} resizeMode="contain" />
        </ContainerLogo>
        <Titulo>Olá, profissional!</Titulo>
        <Descricao>
          <Bold>{`              Frila`}</Bold> é uma plataforma que conecta
          clientes e profissionais de serviço. Aqui, você poderá encontrar novos
          clientes e montar uma rede forma <Bold>rápida e segura</Bold>!
        </Descricao>
        <Box></Box>

        <Descricao>
          <Bold>{`              Quer trabalhar no Frila`}</Bold>?
        </Descricao>
        <Descricao>
          Faça seu <Bold>pré-cadastro </Bold>agora para demonstrar seu
          interesse. Importante: Isso <Bold>não garante </Bold>a sua
          participação na plataforma e o prazo para analise de sua solicitação é
          de até 48h.
        </Descricao>

        <ContainerButton
          onPress={() => {
            if (checked === true) {
              navigation.navigate('Cadastro');
            }
          }}>
          <Button titulo="Ir para o Pré-cadastro" cor="#4169E1" />
        </ContainerButton>

        <BoxTermo>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Termo>
            Estou ciente dos Termos de Uso e Politicas da <Bold>FRILA.</Bold>
          </Termo>
        </BoxTermo>
      </Container>
    </>
  );
};

export default CadastroTermos;
