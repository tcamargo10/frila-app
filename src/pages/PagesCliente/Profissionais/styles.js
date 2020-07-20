import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 20px;
  padding-bottom: 0px;
`;

export const Header = styled.View``;

export const Body = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  height: 40px;
  margin-top: 5px;
  font-size: 16px;
`;

export const Card = styled.TouchableOpacity`
  height: 120px;
  border: 1px solid gray;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 20px;
  elevation: 2;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export const ContainerSeparador = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Separador = styled.View`
  height: 70px;
  width: 2px;
  margin-left: 20px;
  background-color: gray;
`;

export const Perfil = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const CheckStatus = styled.View``;

export const ContainerLeft = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 15px;
`;

export const ContainerRight = styled.View`
  justify-content: flex-end;
`;

export const Distancia = styled.Text`
  font-size: 16px;
`;

export const Status = styled.Text`
  font-size: 14px;
  color: ${(props) => props.textColor};
`;

export const Avatar = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  padding-left: 5px;
`;

export const Info = styled.View`
  padding: 10px;
`;

export const Nome = styled.Text`
  font-size: 19px;
  font-weight: bold;
`;

export const Categoria = styled.Text`
  font-size: 19px;
  color: #4169e1;
`;

export const Stars = styled.Text`
  font-size: 16px;
`;
