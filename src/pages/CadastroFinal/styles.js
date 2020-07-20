import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: space-between;
  padding-top: 5px;
  align-items: center;
`;

export const ContainerForm = styled.View`
  margin: 10px;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
  justify-content: center;
`;

export const ContainerLogo = styled.View`
  height: 130px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Logo = styled.Image`
  height: 130px;
  width: 160px;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.Text`
  font-size: 17px;
`;

export const Bold = styled(Description)`
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 27px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Box = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const Icone = styled.Image`
  height: 60px;
  width: 60px;
  margin: 10px;
`;

export const Image = styled.Image`
  flex: 1;
  margin-top: 10px;
  margin-bottom: 40px;
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
