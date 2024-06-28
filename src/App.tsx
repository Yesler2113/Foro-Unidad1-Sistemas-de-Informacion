import React from 'react';
import HomeScreen from './presentation/screens/Homescreen';
import { View } from 'react-native';
import { styles } from './config/app-theme';


const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  );
};

export default App;


