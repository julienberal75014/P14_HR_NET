import { configureStore, combineReducers } from '@reduxjs/toolkit';
import employeesReducer from './reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
};

const reducers = combineReducers({
    employees: employeesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);