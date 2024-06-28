import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import useTasks from '../hooks/useTask';


const HomeScreen = () => {
  const { tasks, addTask } = useTasks();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;
