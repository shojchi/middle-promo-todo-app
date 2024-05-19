import { createAction, props } from '@ngrx/store'
import { Todo } from 'src/app/models/todo.model';

export const addTodo = createAction('[Todo Component] Add Todo', props<{ todo: Todo }>());
export const updateTodo = createAction('[Todo Component] Update Todo', props<{ todo: Todo }>());
export const deleteTodo = createAction('[Todo Component] Delete Todo', props<{ todoId: string }>());

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');