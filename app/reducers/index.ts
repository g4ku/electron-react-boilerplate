import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import counter, { CounterState } from './counter';
import { History } from 'history';

export type AppState = {
  router: RouterState;
  counter: CounterState;
};

export default function createRootReducer(history: History<any>) {
  return combineReducers<AppState>({
    router: connectRouter(history),
    counter
  });
}
