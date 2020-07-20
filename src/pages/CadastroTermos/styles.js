import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const ContainerLogo = styled.View`
  align-items: center;
`;

export const Box = styled.View`
  margin-bottom: 18px;
`;

export const ContainerButton = styled.TouchableOpacity`
  margin-top: 30px;
  margin-bottom: 40px;
  height: 50px;
  width: 100%;
`;

export const Descricao = styled.Text`
  font-size: 16px;
`;

export const Titulo = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const BoxTermo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Termo = styled.Text`
  font-size: 13px;
`;

export const Logo = styled.Image`
  height: 150px;
  width: 150px;
`;

export const Bold = styled(Descricao)`
  font-weight: bold;
`;
