import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../config/app-theme';

interface TaskInputProps {
  onAddTask: (task: string) => void;
}

const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        placeholderTextColor={styles.buttonText.color}
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskInput;

