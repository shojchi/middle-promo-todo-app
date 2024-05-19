import { createSelector } from "@ngrx/store";
import { AppState } from "../states/app.state";
import { TodoState } from "../reducers/todo.reducer";

export const selectTodoState = (state: AppState) => state.todos;

export const selectTodo = createSelector(
    selectTodoState,
    (state: TodoState) => state.todos
)