import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainWindow from './src/components/mainWindow';
import ExitingTrain from './src/components/existing-train'
import CreateTrain from './src/components/create-train';


export function App() {
  return (
    <View style={styles.container}>
      <Text>This is App.tsx</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNavigator = createStackNavigator({
  MainWindow: MainWindow,
  CreateTrain: CreateTrain,
  ExistingTrain: ExitingTrain
});

export default createAppContainer(AppNavigator);