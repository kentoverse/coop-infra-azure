// src/app-expo/app/index.tsx
import React from 'react';
import ProfilerPage from '@/components/profilerPage'; //
import { TodoList } from '@/models/todoList';
import { TodoItemState } from '@/models';


interface TodoItem {
    id: string;
    name: string;
    listId: string;
    dueInDays: number;
    progress: number;
}

// Provide mock data shaped for `ProfilePager` component (id, items with `text` and numeric `dueInDays`)
// Mock data
const mockTodoLists: TodoList[] = [
  {
    id: 'list1',
    name: 'Personal Tasks',
    items: [
      { id: 'item1', name: 'Finish report', listId: 'list1', dueInDays: 3, progress: 0.2, state: TodoItemState.InProgress },
      { id: 'item2', name: 'Buy groceries', listId: 'list1', dueInDays: 1, progress: 0.5, state: TodoItemState.Todo },
    ],
  },
  {
    id: 'list2',
    name: 'Work Tasks',
    items: [
      { id: 'item3', name: 'Call John', listId: 'list2', dueInDays: 2, progress: 0.1, state: TodoItemState.Todo }, 
    ],
  },
  {
    id: 'list3',
    name: 'Home Chores',
    items: [
      { id: 'item4', name: 'Clean house', listId: 'list3', dueInDays: 5, progress: 0.3, state: TodoItemState.Todo }, 
      { id: 'item5', name: 'Send invoices', listId: 'list3', dueInDays: 4, progress: 0.7, state: TodoItemState.Todo }
    ],
  },
];


export default function Index() {
  return <ProfilerPage todoLists={mockTodoLists} />;
}