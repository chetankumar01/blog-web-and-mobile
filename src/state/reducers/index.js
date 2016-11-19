import { combineReducers } from 'redux';
import Feed from './feed-reducer';

const appReducer = combineReducers({
  Feed
});

const rootReducer = (state, action) => {
  if(action.type === 'RESET_STATE'){
    state = {}
  }
  
  return appReducer(state, action)
}

export default rootReducer
