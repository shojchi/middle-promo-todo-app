import { createReducer, on } from '@ngrx/store';

import { add, remove, update } from './todo.actions';
import { Todo } from '../todo-list/todo.model';

export const initialState: ReadonlyArray<Todo> = [{
  description: 'Complete test task',
  dueDate: '2024-05-30',
  creationDate: '2024-03-10',
  completed: false,
  completionDate: '2024-05-29',
  id: '1'
},
{
  description: 'Home chores',
  dueDate: '2024-02-03',
  creationDate: '2024-02-02',
  completed: true,
  completionDate: '2024-02-03',
  id: '2'
},
{
  description: 'Read 15 pages of book',
  dueDate: '2024-05-11',
  creationDate: '2024-05-10',
  completed: true,
  completionDate: '2024-05-13',
  id: '3'
}];

export const todosReducer = createReducer(
  initialState,
  on(add, (state, { todo }) => {
    if (state.indexOf(todo) > -1) return state;
    return [...state, todo];
  }),
  on(remove, (state, { todo }) => state.filter((el) => el.id !== todo.id)),
  on(update, (state, { todo }) => {
    return [...state.filter(el => el.id !== todo.id), todo];
  }),
);