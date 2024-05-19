import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Todo } from '../todo-list/todo.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Todo>>('books');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);