import { createReducer, on } from "@ngrx/store";
import { Todo } from 'src/app/todo-list/todo.model';
import { addTodo, deleteTodo, updateTodo } from "../actions/todo.actions";

export interface TodoState {
    todos: Todo[];
}

export const initialTodoState: TodoState = {
    todos: [{
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
    }]
};

export const todoReducer = createReducer(
    initialTodoState,

    on(addTodo, (state, { todo }) => ({ ...state, todos: [...state.todos, todo] })),

    on(updateTodo, (state, { todo }) => ({ ...state, todos: state.todos.map(t => t.id === todo.id ? todo : t) })),

    on(deleteTodo, (state, { todoId }) => ({ ...state, todos: state.todos.filter(t => t.id !== todoId) })),
)