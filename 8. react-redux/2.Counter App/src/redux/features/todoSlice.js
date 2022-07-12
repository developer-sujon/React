const { createSlice } = require("@reduxjs/toolkit");

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },

  reducers: {
    Addtodo(state, action) {
      state.todos = [
        { title: action.payload.title, status: false },
        ...state.todos,
      ];
    },

    Edittodo(state, action) {
      const todoIndex = state.todos.findIndex(
        (todo, index) => action.payload["index"] === index,
      );

      let updatedTodo = state.todos[todoIndex];
      updatedTodo.title = action.payload["title"];
      updatedTodo.status = action.payload["status"];
      state.todos[todoIndex] = updatedTodo;
    },

    Removetodo(state, action) {
      const newTodo = state.todos.filter(
        (todo, index) => action.payload["index"] !== index,
      );

      state.todos = newTodo;
    },
  },
});

export const { Addtodo, Edittodo, Removetodo } = todoSlice.actions;
export default todoSlice.reducer;
