import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#6200ee',
  accent: '#03dac4',
  textPrimary: '#000000',
  textSecondary: '#666666',
  background: '#000000',
  lightGray: '#9a4545',
  darkGray: '#2d2d2d',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: colors.lightGray,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: colors.textPrimary,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: colors.textPrimary,
    fontSize: 16,
  },
  taskItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    color: colors.textPrimary,
  },
});
