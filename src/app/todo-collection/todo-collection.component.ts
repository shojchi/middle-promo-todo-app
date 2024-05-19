import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo-list/todo.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './todo-collection.component.html',
  styleUrls: ['./todo-collection.component.scss'],
})
export class BookCollectionComponent {
  @Input() books: (Todo | undefined)[] | null = [];
  @Output() remove = new EventEmitter<string>();
}