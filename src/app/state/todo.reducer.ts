import { createReducer, on } from '@ngrx/store';

import { retrievedBookList } from './todo.actions';
import { Todo } from '../todo-list/todo.model';

export const initialState: ReadonlyArray<Todo> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);