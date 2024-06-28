// __tests__/TaskList.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import TaskList from '../presentation/components/TaskList';


test('should display tasks', () => {
  const tasks = ['Task 1', 'Task 2'];
  const { getByText } = render(<TaskList tasks={tasks} />);

  expect(getByText('Task 1')).toBeTruthy();
  expect(getByText('Task 2')).toBeTruthy();
});
