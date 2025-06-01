import { View, Text, SafeAreaView, Alert, Animated } from 'react-native';
import React, { useContext, useEffect, useRef } from 'react';
import { styles } from './Login.css';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { AuthContext } from '../../context/AuthContext';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Validation schema
const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required'),
  password: Yup.string()
    .required('Password is required'),
});

const Login = () => {
  const { login } = useContext(AuthContext);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);


  //login functionality, the value is stored in async storage and the stack is changed
  const onLogin = (values) => {
    const { username, password } = values;
    try {
      if (username === 'admin' && password === 'password123') {
        login(username);
      } else {
        Alert.alert('Invalid Credentials', 'Try admin/password123');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.loginText}>Login</Text>

      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={onLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <Animated.View style={[styles.formWrapper, {
            opacity: fadeAnim,
            transform: [{ translateY }],
          }]}>
            <CustomInput
              placeholder="Username"
              value={values.username}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              iconName="user"
            />
            {touched.username && errors.username && (
              <Text style={styles.errorMessage}>{errors.username}</Text>
            )}

            <View style={styles.gap} />

            <CustomInput
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              isPassword
              iconName="lock"
            />
            {touched.password && errors.password && (
              <Text style={styles.errorMessage}>{errors.password}</Text>
            )}

            <CustomButton title="Login" onPress={handleSubmit} />
          </Animated.View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
