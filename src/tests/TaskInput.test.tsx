import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TaskInput from '../presentation/components/TaskInput';


test('should add task', () => {
  const addTask = jest.fn();
  const { getByPlaceholderText, getByText } = render(<TaskInput onAddTask={addTask} />);

  fireEvent.changeText(getByPlaceholderText('Enter a task'), 'New Task');
  fireEvent.press(getByText('Add Task'));

  expect(addTask).toHaveBeenCalledWith('New Task');
});

