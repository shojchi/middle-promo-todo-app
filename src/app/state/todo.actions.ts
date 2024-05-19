import { createAction, props } from '@ngrx/store';
import { Todo } from '../todo-list/todo.model';

export const addBook = createAction(
    '[Todo List] Add Book',
    props<{ bookId: string }>()
);

export const removeBook = createAction(
    '[Todo Collection] Remove Book',
    props<{ bookId: string }>()
);

export const retrievedBookList = createAction(
    '[Todo List] Retrieve Books Success',
    props<{ books: ReadonlyArray<Todo> }>()
);