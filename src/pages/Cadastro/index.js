import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput, RadioButton, Appbar} from 'react-native-paper';

import {
  Container,
  TitleInfo,
  Title,
  Description,
  Blue,
  Text,
  Input,
  GroupLinha,
  Linha,
  ContainerInput,
  ContainerInputRow,
  ContainerForm,
  Button,
  TextButton,
} from './styles';

const Cadastro = ({navigation: {goBack}}) => {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  const [email, setEmail] = useState('');
  const [cel, setCel] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [outracidade, setOutraCidade] = useState(false);
  const [cnpj, setCnpj] = useState(false);

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
        <ContainerForm>
          <TitleInfo>O pré-cadastro é rapidinho :)</TitleInfo>
          <Title>Bem-vindo ao Frila.</Title>
          <Description>
            Para dar continuidade precisamos saber{' '}
            <Blue>algumas informações</Blue> sobre você!
          </Description>

          <Text>Nome Completo*</Text>
          <Input onChangeText={(value) => setNome(value)} value={nome} />

          <GroupLinha>
            <Linha />
            <Text> Sexo </Text>
            <Linha />
          </GroupLinha>

          <RadioButton.Group
            onValueChange={(value) => setSexo(value)}
            value={sexo}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <RadioButton.Item label="Masculino" value="M" />
              <RadioButton.Item label="Feminino" value="F" />
              <RadioButton.Item label="Outros" value="O" />
            </View>
          </RadioButton.Group>

          <Text>E-mail*</Text>
          <Input
            onChangeText={(value) => setEmail(value)}
            value={email}
            keyboardType={'email-address'}
          />

          <ContainerInputRow>
            <ContainerInput>
              <Text>Contato celular*</Text>
              <Input
                onChangeText={(value) => setCel(value)}
                value={cel}
                keyboardType={'phone-pad'}
              />
            </ContainerInput>

            <ContainerInput>
              <Text>Contato whatsapp*</Text>
              <Input
                onChangeText={(value) => setWhatsapp(value)}
                value={whatsapp}
                keyboardType={'phone-pad'}
              />
            </ContainerInput>
          </ContainerInputRow>

          <ContainerInputRow>
            <ContainerInput>
              <Text>Estado onde antende*</Text>
              <Input
                onChangeText={(value) => setEstado(value)}
                value={estado}
              />
            </ContainerInput>

            <ContainerInput>
              <Text>Cidade onde atende*</Text>
              <Input
                onChangeText={(value) => setCidade(value)}
                value={cidade}
              />
            </ContainerInput>
          </ContainerInputRow>

          <Text>Deseja atender outras cidades?</Text>

          <Text>Você possui CNPJ?</Text>
        </ContainerForm>

        <Button
          onPress={() => {
            navigation.navigate('CadastroSequencia');
          }}>
          <TextButton>PRÓXIMO PASSO</TextButton>
        </Button>
      </Container>
    </>
  );
};

export default Cadastro;
