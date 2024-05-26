import { createReducer, on } from '@ngrx/store';

import { add, remove, update } from './todo.actions';
import { Todo } from '../todo-list/todo.model';

export const initialState: ReadonlyArray<Todo> = [{
  description: 'test description',
  dueDate: '10 days',
  creationDate: '03/04/2024',
  completed: false,
  completionDate: '13/05/2024',
  id: '1'
},
{
  description: 'test description2',
  dueDate: '11 days',
  creationDate: '04/02/2024',
  completed: true,
  completionDate: '10/03/2024',
  id: '2'
},
{
  description: 'test description3',
  dueDate: '12 days',
  creationDate: '01/08/2024',
  completed: true,
  completionDate: '10/03/2024',
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