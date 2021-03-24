import React from 'react';

// Components
import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

// Icon
import FeatherIcon from 'react-native-vector-icons/Feather';

// Styles
import { Container, Title, BackToSignInButton, BackToSignInButtonText } from './styles';

// Assets
import logoImg from '../../assets/logo.png'

// Dependencies
import { useNavigation } from '@react-navigation/native';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return <>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Image source={logoImg} />

          <View>
            <Title>Crie sua conta</Title>
          </View>

          <Input name="name" icon="user" placeholder="Nome" />
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />

          <Button onPress={() => { console.log("a") }}>Entrar</Button>

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>

    <BackToSignInButton onPress={() => navigation.goBack()} >
      <FeatherIcon name="arrow-left" size={20} color="#fff" />
      <BackToSignInButtonText>Voltar para logon</BackToSignInButtonText>
    </BackToSignInButton>
  </>
}

export default SignUp;