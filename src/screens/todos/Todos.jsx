// src/screens/Todo.js
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './Todos.css';
import CustomHeader from '../../components/CustomHeader';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../utils/Constants';
import { AuthContext } from '../../context/AuthContext';
import { addTodo, toggleTodo, deleteTodo, loadTodos, persistTodos } from '../../redux/todos/TodoSlice';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const { logout } = useContext(AuthContext);

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  useEffect(() => {
    dispatch(persistTodos());
  }, [todos]);

  const handleAdd = () => {
    if (todo.trim()) {
      dispatch(addTodo({ id: Date.now(), title: todo, completed: false }));
      setTodo('');
    }
  };

  const handleToggle = id => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(selectedTodoId));
    setModalVisible(false);
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
        />
        <CustomButton title={"Add"} onPress={handleAdd} disabled={!todo.trim()} />

        <FlatList
          data={todos}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ width: "90%", alignSelf: "center" }}
          ListEmptyComponent={<Text style={styles.empty}>No items</Text>}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <TouchableOpacity onPress={() => handleToggle(item.id)} style={styles.checkboxContainer}>
                <Icon
                  name={item.completed ? 'checkbox-marked' : 'checkbox-blank-outline'}
                  size={24}
                  color={item.completed ? colors.green : colors.gray}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleToggle(item.id)} style={styles.tasktitle}>
                <Text style={[styles.task, { textDecorationLine: item.completed ? 'line-through' : 'none' }]} numberOfLines={0}>
                  {item.title}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setSelectedTodoId(item.id);
                setModalVisible(true);
              }} style={styles.deleteContainer}>
                <Icon name={"delete"} size={25} color={colors.red} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {modalVisible && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Are you sure you want to delete this todo?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.deleteButton]}
                onPress={handleDelete}
              >
                <Text style={styles.modalButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Todo;
