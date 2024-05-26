import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from './todo.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoListComponent {
  @Input() todos: ReadonlyArray<Todo> | null = [];
  @Output() add = new EventEmitter<Todo>();
  @Output() retrieveAllTodos = new EventEmitter<Todo[]>();
  @Output() hideAllTodos = new EventEmitter<void>();
  newTodoForm = new FormGroup({
    description: new FormControl('', Validators.required),
    dueDate: new FormControl(''),
    creationDate: new FormControl('', Validators.required),
    completed: new FormControl(''),
    completionDate: new FormControl(''),
  });
  activeForm = false;

  constructor() {
  }
  
  getAll() {
    this.retrieveAllTodos.emit(this.todos as Todo[]);
  }
  //TODO: add mask for Dates
  
  addNewTodo() {
    this.activeForm = true;
    if (this.todos && this.newTodoForm.valid) {
      const newTodo = this.newTodoForm.value;
      const existIds = this.todos.map(el => +el.id);
      const newTodoId = Math.max(...existIds) + 1;
      newTodo.id = String(newTodoId);
      this.add.emit(newTodo);
      this.newTodoForm.reset();
      this.activeForm = false;
    }
  }
}