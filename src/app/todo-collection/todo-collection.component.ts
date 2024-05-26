import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo-list/todo.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-collection',
  templateUrl: './todo-collection.component.html',
  styleUrls: ['./todo-collection.component.scss'],
})
export class TodoCollectionComponent {
  @Input() todos: (Todo | undefined)[] | null = [];
  @Output() remove = new EventEmitter<Todo>();
  @Output() update = new EventEmitter<Todo>();
  editMode = false;
  editTodoForm = new FormGroup({
    description: new FormControl('', Validators.required),
    dueDate: new FormControl(''),
    creationDate: new FormControl('', Validators.required),
    completed: new FormControl(''),
    completionDate: new FormControl(''),
    id: new FormControl({ value: '', disabled: true })
  });
  activeForm = false;

  constructor() {

  }

  editTodo(todo: Todo | undefined) {
    this.editMode = true;
    this.editTodoForm.patchValue({
      description: todo?.description,
      dueDate: todo?.dueDate,
      creationDate: todo?.creationDate,
      completed: todo?.completed,
      completionDate: todo?.completionDate,
      id: todo?.id
    })
  }
  //TODO: add mask for Dates

  updateTodo() {
    this.activeForm = true;
    if (this.editTodoForm.valid) {
      this.update.emit(this.editTodoForm.getRawValue());
      this.editTodoForm.reset();
      this.activeForm = false;
      this.editMode = false;
    }
  }

  cancelEdit() {
    this.editTodoForm.reset();
    this.editMode = false;
  }
}