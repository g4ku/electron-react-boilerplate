import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';
import { Action } from './types';

export type CounterState = {
  count: number;
};

export default function counter(
  state: CounterState = { count: 0 },
  action: Action
) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNTER:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
