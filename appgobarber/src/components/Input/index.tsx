import React, { useEffect, useRef } from 'react';

// Dependencies
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core'

// Styles
import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface inputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const { registerField, defaultValue, fieldName, error } = useField(name);
  const inputvalueRef = useRef<inputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputvalueRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (<Container>
    <Icon name={icon} size={20} color="#666360" />
    <TextInput
      onChangeText={value => inputvalueRef.current.value = value}
      keyboardAppearance="dark"
      defaultValue={defaultValue}
      placeholderTextColor="#666360"
      {...rest}
    />
  </Container>)
};

export default Input;