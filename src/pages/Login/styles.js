import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const GroupTop = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #ffa500;
`;

export const ButtonTop = styled.TouchableOpacity`
  justify-content: center;
  height: 40px;
`;

export const ContainerBody = styled.View`
  flex: 1;
  margin: 40px;
  align-items: center;
  margin-top: 20px;
`;

export const ContainerLogo = styled.View`
  height: 150px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Logo = styled.Image`
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;
`;

export const TextInfo = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ContainerButton = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  margin-bottom: 10px;
`;

export const Linha = styled.View`
  height: 1px;
  width: 100%;
  background-color: #c0c0c0;
`;

export const Email = styled.Text`
  font-size: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const GroupLinha = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const GroupEmail = styled.View`
  flex-direction: row;
`;
