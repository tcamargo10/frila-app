import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

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

const Cadastro = () => {
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
            <Input onChangeText={(value) => setEstado(value)} value={estado} />
          </ContainerInput>

          <ContainerInput>
            <Text>Cidade onde atende*</Text>
            <Input onChangeText={(value) => setCidade(value)} value={cidade} />
          </ContainerInput>
        </ContainerInputRow>

        <Text>Deseja atender outras cidades?</Text>

        <Text>Você possui CNPJ?</Text>
      </ContainerForm>

      <Button>
        <TextButton>PRÓXIMO PASSO</TextButton>
      </Button>
    </Container>
  );
};

export default Cadastro;
