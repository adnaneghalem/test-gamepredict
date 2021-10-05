import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { gamesApi } from './src/services/gamesApi';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  [gamesApi.reducerPath]: gamesApi.reducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: [gamesApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(gamesApi.middleware, logger),
});

const persistor = persistStore(store);

export { store, persistor };
