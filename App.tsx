import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
