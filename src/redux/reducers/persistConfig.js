import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import store from '../store';

const persistConfig = {
    key: 'root',
    storage
}

export const persistedReducer = (rootReducer) => persistReducer(persistConfig, rootReducer);


