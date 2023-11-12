// reducers.ts
import { AppState } from './model';

export interface Action {
  type: string;
  payload?: any;
}

export const counterReducer = <S extends AppState>(state: S, action: Action): S => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
