import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 15px;
`;

export const CardPerfil = styled.View`
  height: 180px;
  border: 1px solid #ddd6;
  padding: 10px;
  flex-direction: row;
  elevation: 2;
  margin-bottom: 18px;
`;

export const BoxLeft = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerAvatar = styled.View`
  height: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 70px;
`;

export const Avatar = styled.Image`
  height: 130px;
  width: 130px;
  border-radius: 65px;
`;

export const Nome = styled.Text`
  font-size: 17px;
  font-weight: bold;
  margin-top: 12px;
`;

export const Categoria = styled.Text`
  font-size: 17px;
  color: #4169e1;
`;

export const Separador = styled.View`
  border: 1px solid gray;
  margin: 10px;
`;

export const BoxRight = styled.View`
  justify-content: space-between;
  flex: 1;
  align-items: center;
`;

export const BoxAtendimento = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Quantidade = styled.Text`
  font-size: 44px;
  font-weight: bold;
`;

export const TextAtendimento = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export const Satisfacao = styled.Text`
  font-size: 13px;
  font-weight: bold;
`;

export const PerfilVerificado = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: green;
`;

export const Body = styled.View`
  flex: 1;
`;

export const Descricao = styled.Text`
  font-size: 17px;
`;

export const Text = styled.Text``;

export const BoxMaisComentarios = styled.View`
  align-items: flex-end;
`;

export const TextComentario = styled.Text`
  font-size: 14px;
  color: #4169e1;
`;

export const CardComentario = styled.View`
  height: 120px;
  border: 1px solid #ddd6;
  padding: 10px;
  flex-direction: row;
  elevation: 1;
`;

export const BoxData = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BoxInfo = styled.View`
  flex: 4;
`;

export const Stars = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const TitleComentario = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Comentario = styled.Text`
  font-size: 11px;
  color: #4169e1;
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
