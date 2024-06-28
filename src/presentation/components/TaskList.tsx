import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from '../../config/app-theme';

interface TaskListProps {
  tasks: string[];
}

const TaskList = ({ tasks }: TaskListProps) => (
  <View>
    <FlatList
      data={tasks}
      renderItem={({ item }) => <Text style={styles.taskItem}>{item}</Text>}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

export default TaskList;
