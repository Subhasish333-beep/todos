import { View, Text, SafeAreaView, Alert } from 'react-native';
import React, { useContext } from 'react';
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
          <View style={styles.formWrapper}>
            <CustomInput
              placeholder="Username"
              value={values.username}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              iconName="user"
            />
            {touched.username && errors.username && (
              <Text style={{ color: 'red', marginBottom: 10 }}>{errors.username}</Text>
            )}

            <View style={styles.gap}/>

            <CustomInput
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              isPassword
              iconName="lock"
            />
            {touched.password && errors.password && (
              <Text style={{ color: 'red', marginBottom: 10 }}>{errors.password}</Text>
            )}

            <CustomButton title="Login" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
