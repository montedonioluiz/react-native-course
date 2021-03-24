import React from 'react';

// Components
import { Image } from 'react-native';

// Styles
import { Container, Title } from './styles';

// Assets
import logoImg from '../../assets/logo.png'

const SignIn: React.FC = () => {
  return <Container >
    <Image source={logoImg} />
    <Title>Faça seu Logon</Title>
  </Container>
}

export default SignIn;