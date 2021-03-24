import React from 'react';

// Components
import { Image } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

// Styles
import { Container, Title } from './styles';

// Assets
import logoImg from '../../assets/logo.png'

const SignIn: React.FC = () => {
  return <Container >
    <Image source={logoImg} />

    <Title>Faça seu Logon</Title>

    <Input name="email" icon="mail" placeholder="E-mail"/>
    <Input name="password" icon="lock" placeholder="Senha"/>

    <Button onPress={() => {console.log("a")}}>Entrar</Button>
  </Container>
}

export default SignIn;