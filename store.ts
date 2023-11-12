export type Reducer<S, A> = (state: S, action: A) => S;

class Store<S, A> {
  private state: S;
  private listeners: (() => void)[] = [];
  private reducer: Reducer<S, A>;

  constructor(initialState: S, reducer: Reducer<S, A>) {
    this.state = initialState;
    this.reducer = reducer;
  }

  getState(): S {
    return { ...this.state };
  }

  dispatch(action: A): void {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach(listener => listener());
  }

  subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  select<T>(selector: (state: S) => T): T {
    return selector(this.getState());
  }
}

export default Store;
