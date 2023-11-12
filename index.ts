// main.ts
import Store from './store';
import { counterReducer } from './reducer';
import { increment, decrement } from './action';
import { selectCounter } from './selector';

// Example Usage
interface CounterState {
  counter: number;
}

const initialState: CounterState = { counter: 0 };
const store = new Store<CounterState, { type: string }>(initialState, counterReducer);

// Actions
const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log('Current state:', state);
});

// Selector usage
const currentCounter = store.select(selectCounter);
console.log('Current counter value:', currentCounter);

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

// Updated selector usage
const updatedCounter = store.select(selectCounter);
console.log('Updated counter value:', updatedCounter);

unsubscribe(); // Unsubscribe from further state changes
