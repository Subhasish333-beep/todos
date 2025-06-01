import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors, fonts } from '../utils/Constants';

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  iconName,
  isPassword
}) => {
  //state for password show and hide
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  //function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.inputContainer}>
      {iconName && (
        <Icon name={iconName} size={20} color="#666" style={styles.leftIcon} />
      )}

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        placeholderTextColor={colors.input}
        onChangeText={onChangeText}
        secureTextEntry={isPassword && !isPasswordVisible}
        autoCapitalize="none"
      />

      {isPassword && (
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.rightIcon}>
          <Icon name={isPasswordVisible ? 'eye' : 'eye-off'} size={20} color="#666" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    // marginBottom: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    fontFamily: fonts.robotoRegular,
    paddingHorizontal: 10,
    color: colors.input
  },
  leftIcon: {
    marginRight: 5,
  },
  rightIcon: {
    paddingHorizontal: 5,
  },
});
