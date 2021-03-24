import React from 'react';

// Components
import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

// Icon
import FeatherIcon from 'react-native-vector-icons/Feather';

// Styles
import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText } from './styles';

// Dependencies
import { useNavigation } from '@react-navigation/native';

// Assets
import logoImg from '../../assets/logo.png'

const SignIn: React.FC = () => {
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
            <Title>Faça seu Logon</Title>
          </View>

          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />

          <Button onPress={() => { console.log("a") }}>Entrar</Button>

          <ForgotPassword>
            <ForgotPasswordText>
              Esqueci minha senha
      </ForgotPasswordText>
          </ForgotPassword>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>

    <CreateAccountButton onPress={() => navigation.navigate('SignUp')} >
      <FeatherIcon name="log-in" size={20} color="#ff9000" />
      <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
    </CreateAccountButton>
  </>
}

export default SignIn;