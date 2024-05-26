import { createReducer, on } from '@ngrx/store';
import { add, hideAllTodos, remove, retrievedAllTodos, update } from './todo.actions';
import { Todo } from '../todo-list/todo.model';

export const initialState: ReadonlyArray<Todo> = [];

export const collectionReducer = createReducer(
  initialState,
  on(remove, (state, { todo }) => state.filter((el) => el.id !== todo.id)),
  on(retrievedAllTodos, (state, { todos }) => {
    return [...state, ...todos.filter(el => !state.includes(el))];
  }),
  on(hideAllTodos, (state) => {
    console.log(state);
    return [];
  }),
  on(add, (state, { todo }) => {
    if (state.indexOf(todo) > -1) return state;
    return [...state, todo];
  }),
  on(update, (state, { todo }) => {
    return [...state.filter(el => el.id !== todo.id), todo];
  }),
);