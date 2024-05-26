import { Todo } from '../todo-list/todo.model';

export interface AppState {
  todos: ReadonlyArray<Todo>;
  collection: ReadonlyArray<Todo>;
}