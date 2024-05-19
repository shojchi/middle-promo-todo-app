import { Todo } from '../todo-list/todo.model';

export interface AppState {
  books: ReadonlyArray<Todo>;
  collection: ReadonlyArray<string>;
}