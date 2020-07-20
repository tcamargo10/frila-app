import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: space-between;
`;

export const ContainerForm = styled.View`
  padding: 15px;
`;

export const TitleInfo = styled.Text`
  font-size: 18px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #4169e1;
  font-weight: bold;
  margin-top: 5px;
`;

export const Description = styled.Text`
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Blue = styled(Description)`
  color: #00bfff;
  font-weight: bold;
`;

export const Text = styled.Text`
  font-size: 15px;
  margin-top: 10px;
`;

export const Input = styled.TextInput`
  border: 1px solid gray;
  border-radius: 15px;
  padding: 10px;
  height: 30px;
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
  margin-top: 6px;
  justify-content: center;
`;

export const ContainerInput = styled.View`
  width: 48%;
`;

export const ContainerInputRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  width: 100%;
  background-color: #4169e1;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;
