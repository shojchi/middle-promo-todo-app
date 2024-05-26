import { createAction, props } from '@ngrx/store';
import { Todo } from '../todo-list/todo.model';

export const add = createAction(
    '[Todo List] Add New Todo',
    props<{ todo: Todo }>()
);

export const remove = createAction(
    '[Todo Collection] Remove Todo',
    props<{ todo: Todo }>()
);

export const update = createAction(
    '[Todo Collection] Update Todo',
    props<{ todo: Todo }>()
);

export const retrievedAllTodos = createAction(
    '[Todo List] Retrieve All Todos',
    props<{ todos: Todo[] }>()
);

export const hideAllTodos = createAction('[Todo List] Hide All Todos');