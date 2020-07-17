import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: space-between;
  padding-top: 30px;
`;

export const ContainerForm = styled.View`
  padding: 15px;
`;

export const Text = styled.Text`
  font-size: 15px;
  margin-top: 10px;
`;

export const Description = styled.Text`
  font-size: 19px;
  margin-top: 10px;
`;

export const Bold = styled(Description)`
  font-weight: bold;
`;

export const Input = styled.TextInput`
  border: 1px solid gray;
  border-radius: 15px;
  padding: 10px;
  height: 35px;
  margin-top: 5px;
  font-size: 12px;
`;

export const Linha = styled.View`
  height: 1px;
  width: 100%;
  background-color: #c0c0c0;
`;

export const GroupLinha = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 5px;
  justify-content: center;
`;

export const ContainerInput = styled.View`
  width: 48%;
`;

export const ContainerInputRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  width: 100%;
  background-color: #00bfff;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;
