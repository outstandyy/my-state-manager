import { AppState } from './model';

export const selectCounter = (state: AppState): number => state.counter;
