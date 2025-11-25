import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';
import reducers, { ApplicationState } from '@/src/store/reducers';
import { TodoActions } from '@/src/store/actions/common';

// Context type
export interface TodoContextType {
  state: ApplicationState;
  dispatch: Dispatch<TodoActions>;
}

// Create context
const TodoContext = createContext<TodoContextType>({
  state: {
    lists: [],
    selectedList: undefined,
    selectedItem: undefined,
  },
  dispatch: () => {},
});

// Provider
export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, {
    lists: [],           // default empty array
    selectedList: undefined,
    selectedItem: undefined,
  });

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;