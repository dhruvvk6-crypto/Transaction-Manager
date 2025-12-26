import { configureStore, combineReducers } from '@reduxjs/toolkit';
import transactionReducer from './transaction/transactionSlice';
import filterReducer from './filter/filterSlice';
import themeReducer from "./theme/themeSlice"
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  transactions: transactionReducer,
  theme: themeReducer,
  filters: filterReducer
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);
