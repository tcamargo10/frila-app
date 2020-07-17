import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.cor ? props.cor : '#5cb85c')};
  border-radius: 25px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: white;
  align-items: center;
  justify-content: center;
`;
