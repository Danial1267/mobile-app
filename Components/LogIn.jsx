import { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: #fff;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

const InputText = styled.TextInput`
  width: 300px;
  border: 0.5px;
  padding: 6px 24px;
  border-radius: 10px;
  justify-content: center;
`;



const LogInButton = styled.Button`
  border-radius: 10px;
`;

const Logo = styled.Image`
  max-width: 80px;
  max-height: 80px;
  border-radius: 40px;
`;

const Btn = styled.Text`
  border-radius: 10px;
  font-size: 16px;
  height: 30px;
  margin-bottom: 30px;
`;

const BtnLogin = styled.Text`
  font-size: 16px;
  width: 300px;
  border-radius: 25px;
  justify-content: center;
  background-color: #FF1493;
  padding: 15px;
  color: white;
  text-align: center;
`;

export const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

return (
  <Container>
    <Logo source = { require('../assets/image.jpeg') }/>
    <InputText
    placeholder='Введите логин или почту'
    onChangeText={(email) => setEmail(email)}
    />
    <InputText
    placeholder='Введите пароль'
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
    />
    <TouchableOpacity>
      <BtnLogin>Войти</BtnLogin>
    </TouchableOpacity>

    <TouchableOpacity>
      <Btn>Забыли пароль?</Btn>
    </TouchableOpacity>
  </Container>
  );
};