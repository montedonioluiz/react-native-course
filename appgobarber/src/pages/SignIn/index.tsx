import React, { useCallback, useRef } from 'react';
import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native';

// Components
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
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
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSignIn = useCallback((data: object) => {
    console.log("A: ", data)
  }, [])

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

          <Form ref={formRef} onSubmit={handleSignIn} style={{ width: '100%' }}>
            <Input
              name="email"
              icon="mail"
              placeholder="E-mail"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              keyboardType="email-address"
              // onSubmitEditing={() => /*focus on next element*/ }
            />
            <Input
              name="password"
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={() => { formRef.current?.submitForm(); }}
            />

            <Button
              onPress={() => { formRef.current?.submitForm(); }}
            >
              Entrar
            </Button>
          </Form>

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