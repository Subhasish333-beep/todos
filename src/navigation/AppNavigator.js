import React, { useContext } from 'react';
import TodoStack from './TodoStack';
import AuthStack from './AuthStack';
import { AuthContext } from '../context/AuthContext';

const AppNavigator = () => {
  // const [user, setUser] = useState(false);

  const { user } = useContext(AuthContext);

  return (
   user ? <TodoStack /> : <AuthStack />
  )
}

export default AppNavigator