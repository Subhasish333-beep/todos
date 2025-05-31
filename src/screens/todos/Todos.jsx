import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../context/AuthContext';
import { styles } from './Todos.css';
import CustomHeader from '../../components/CustomHeader';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../utils/Constants';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const data = await AsyncStorage.getItem('todos');
    if (data) setTodos(JSON.parse(data));
  };

  useEffect(() => {
    AsyncStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, { id: Date.now(), title: todo, completed: false }]);
      setTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={"Todos"} onClick={logout} />
      <Text style={styles.header}>Todo List</Text>
      <View style={styles.todoContainer}>
        <CustomTextInput
          placeholder="Add Todo"
          value={todo}
          onChangeText={setTodo}
          style={styles.input}
        />
        <CustomButton title={"Add"} onPress={addTodo} disabled={todo.length ? false : true} style={styles.disabled} />


        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ width: "90%", alignSelf: "center" }}
          ListEmptyComponent={() => {
            return (
              <Text style={styles.empty}>No items</Text>
            )

          }}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <TouchableOpacity onPress={() => toggleTodo(item.id)} style={styles.checkboxContainer}>
                <Icon
                  name={item.completed ? 'checkbox-marked' : 'checkbox-blank-outline'}
                  size={24}
                  color={item.completed ? colors.green : colors.gray}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleTodo(item.id)}>
                <Text style={[styles.task, { textDecorationLine: item.completed ? 'line-through' : 'none' }]} numberOfLines={0}>
                  {item.title}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTodo(item.id)} style={styles.deleteContainer}>
                <Icon name={"delete"} size={25} color={colors.red} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Todo;


