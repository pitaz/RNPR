import React from 'react';
import {styles} from './styles';
import {View, TextInput} from 'react-native';
import {colors} from '../../theme/colors';

const Input = ({onChangeText, style, children}) => {
  return (
    <View style={{...styles.inputWrapper, ...style}}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={onChangeText}
        placeholderTextColor={colors.GREY}>
        {children}
      </TextInput>
    </View>
  );
};

export default Input;
