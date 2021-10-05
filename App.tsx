/* eslint-disable react/style-prop-object */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider as ReduxProvider } from 'react-redux';

import { persistor, store } from './store';
import Routes from './src/index';
import { PersistGate } from 'redux-persist/integration/react';

function App(): JSX.Element | null {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes />
          </PersistGate>
        </ReduxProvider>
      </NavigationContainer>
    </>
  );
}

export default App;
