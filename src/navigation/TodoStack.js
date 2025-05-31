import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todos from '../screens/todos/Todos';

const Stack = createNativeStackNavigator();

const TodoStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Todo" component={Todos} />
        </Stack.Navigator>
    )
}

export default TodoStack