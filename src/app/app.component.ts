import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/todo.selector';
import {
  retrievedBookList,
  addBook,
  removeBook,
} from './state/todo.actions';
import { GoogleBooksService } from './todo-list/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
  booksInit = this.booksService.getBooks();

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(retrievedBookList({
      books: this.booksInit 
    }));
  }
}
