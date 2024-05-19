import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  constructor(private http: HttpClient) { }

  getBooks(): Array<Todo> {
    return [{
      description: 'test description',
      dueDate: '10 days',
      creationDate: '03/04/2024',
      completed: false,
      completeDate: '13/05/2024',
      id: '1'
    },
    {
      description: 'test description2',
      dueDate: '11 days',
      creationDate: '04/02/2024',
      completed: true,
      completeDate: '10/03/2024',
      id: '2'
    },
    {
      description: 'test description3',
      dueDate: '12 days',
      creationDate: '01/08/2024',
      completed: true,
      completeDate: '10/03/2024',
      id: '3'
    }];
  }
}