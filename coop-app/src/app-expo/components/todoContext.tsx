// src/app-expo/components/todoContext.tsx
import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';
import { ApplicationState } from '@/models/applicationState';
import RootReducer from '@/store/reducers';
import { listsReducer } from "@/store/reducers/listsReducer";
import { selectedItemReducer } from "@/store/reducers/selectedItemReducer";
import { selectedListReducer } from "@/store/reducers/selectedListReducer";

// Define the type for the context
export interface TodoContextType {
    state: ApplicationState;
    dispatch: Dispatch<any>;
}


// Create the context with null default
export const TodoContext = createContext<TodoContextType>({
    state: {
        lists: [],
        selectedList: undefined,
        selectedItem: undefined,
    },
    dispatch: () => { },
});


// TodoProvider to wrap the app
export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(RootReducer, {
        lists: listsReducer(undefined, { type: '@@INIT' }) || [], // ensure always array
        selectedList: selectedListReducer(undefined, { type: '@@INIT' }),
        selectedItem: selectedItemReducer(undefined, { type: '@@INIT' }),
    });

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};