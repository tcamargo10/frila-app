import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Description,
  Bold,
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

const CadastroFinal = () => {
  const navigation = useNavigation();

  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [categoria, setCategoria] = useState('');

  return (
    <Container>
      <ContainerForm>
        <Description>Já estamos finalizando :)</Description>

        <Text>CPF*</Text>
        <Input
          onChangeText={(value) => setCpf(value)}
          value={cpf}
          keyboardType={'phone-pad'}
        />

        <ContainerInputRow>
          <ContainerInput>
            <Text>RG Nº*</Text>
            <Input
              onChangeText={(value) => setRg(value)}
              value={rg}
              keyboardType={'phone-pad'}
            />
          </ContainerInput>

          <ContainerInput>
            <Text>Data de nascimento*</Text>
            <Input
              onChangeText={(value) => setNascimento(value)}
              value={nascimento}
              keyboardType={'phone-pad'}
            />
          </ContainerInput>
        </ContainerInputRow>

        <Description>
          <Bold>Precisamos</Bold> saber qual <Bold>categoria</Bold> de serviço
          você vai oferecer em nossa plataforma :)
        </Description>

        <GroupLinha>
          <Linha />
          <Text> Categoria </Text>
          <Linha />
        </GroupLinha>

        <Input
          onChangeText={(value) => setCategoria(value)}
          value={categoria}
        />
      </ContainerForm>

      <Button
        onPress={() => {
          navigation.navigate('CadastroDocs');
        }}>
        <TextButton>PRÓXIMO PASSO</TextButton>
      </Button>
    </Container>
  );
};

export default CadastroFinal;
