import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
`;

export const ContainerLogo = styled.View`
  align-items: center;
`;

export const Logo = styled.Image`
  height: 150px;
  width: 150px;
`;

export const Titulo = styled.Text`
  font-size: 22px;
  font-weight: bold;
  align-items: center;
  margin-bottom: 25px;
`;

export const BoxButtons = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  border-radius: 15px;
  background-color: #4169e1;
  margin-left: 5px;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: white;
  font-size: 14px;
`;

export const CardVazio = styled.View`
  height: 120px;
  width: 100%;
  border: 1px solid gray;
  elevation: 2;
  margin-bottom: 10px;
`;

export const Card = styled.TouchableOpacity`
  height: 120px;
  width: 100%;
  border: 1px solid gray;
  elevation: 2;
  margin-bottom: 10px;
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

export const BoxLeft = styled.View`
  margin-left: 5px;
`;

export const BoxRight = styled.View`
  margin-left: 15px;
`;

export const Header = styled.View`
  flex: 1;
`;

export const Body = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxInfo = styled.View`
  flex: 1;
  margin-left: 5px;
`;

export const Avatar = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 35px;
`;

export const Valor = styled.Text`
  font-size: 16px;
  font-weight: bold;
  background-color: #ffbd4e;
`;

export const TitleCard = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const Cliente = styled.Text`
  font-size: 15px;
  color: gray;
`;

export const Data = styled.Text`
  background-color: #ddd;
`;

export const Local = styled.Text``;

export const Icon = styled.Image`
  height: 40px;
  width: 40px;
`;
