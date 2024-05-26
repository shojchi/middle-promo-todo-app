import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Todo } from '../todo-list/todo.model';

export const selectTodos = createFeatureSelector<ReadonlyArray<Todo>>('todos');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<Todo>
>('collection');

export const selectTodoCollection = createSelector(
  selectTodos,
  selectCollectionState,
  (todos, collection) => {
    return collection.map((el) => todos.find((todo) => todo.id === el.id));
  }
);