import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectTodoCollection, selectTodos } from './state/todo.selector';
import {
  add,
  remove,
  retrievedAllTodos,
  hideAllTodos,
  update,
} from './state/todo.actions';
import { Todo } from './todo-list/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  todos$ = this.store.select(selectTodos);
  todoCollection$ = this.store.select(selectTodoCollection);

  onAdd(todo: Todo) {
    this.store.dispatch(add({ todo }));
  }

  onRemove(todo: Todo) {
    this.store.dispatch(remove({ todo }));
  }

  onUpdate(todo: Todo) {
    this.store.dispatch(update({ todo }));
  }

  onGetAll(todos: Todo[]) {
    this.store.dispatch(retrievedAllTodos({ todos }));
  }

  onHideAll() {
    this.store.dispatch(hideAllTodos());
  }

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    
  }
}
