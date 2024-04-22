import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
    },
    toggleComplete: (state, action) => {
      const taskToUpdate = state.tasks.find(task => task.id === action.payload.id);
      if (taskToUpdate) {
    
        taskToUpdate.completed = !taskToUpdate.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete } = taskSlice.actions;
export default taskSlice.reducer;
