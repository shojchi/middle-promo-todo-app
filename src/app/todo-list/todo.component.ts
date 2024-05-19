import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Todo> | null = [];
  @Output() add = new EventEmitter<string>();
}