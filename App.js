import React from 'react';
import {Box, NativeBaseProvider, Text} from 'native-base';
import MainPage from './src/screens/MainPage';

const App = () => {
  return(
    <NativeBaseProvider>
      <MainPage/>
    </NativeBaseProvider>
  );
}

export default App;