import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllTodos = createAsyncThunk("todos/getAll", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = res.json();
  return data;
});
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading:true,
    error:""
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markAsDone: (state, action) => {
      console.log("sliceeeee", action.payload);
      const index = state.todos.findIndex((todo) => todo.id === action.payload);


      if (state.todos[index].completed === false) {
        state.todos[index].categoryId = 2;
      }


      if (state.todos[index].completed === true) {
        state.todos[index].categoryId = 1;
      }
      state.todos[index].completed = !state.todos[index].completed;

    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTodos.fulfilled, (state, action) => {
      console.log(action.payload);
      state.todos = action.payload;
      state.loading=false
    }).addCase(getAllTodos.rejected,(state,action)=>{
      state.loading=false
      state.error="cannot retrive data from server"
    });
  },
});
export const { addTodo, removeTodo, markAsDone } = todoSlice.actions;
export default todoSlice;
