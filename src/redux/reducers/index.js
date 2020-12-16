import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from '../user/user.reducer';
import retail from '../retail/retail.reducer';
import alert from '../alert/alert.reducer'
import stock from '../stock/stock.reducer'
import modal from '../modal/modal.reducer'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['stock'],
};

const rootReducer = combineReducers({
  alert,
  user,
  retail,
  stock,
  modal
});

export default persistReducer(persistConfig, rootReducer);