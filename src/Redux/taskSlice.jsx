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
        const indexToDelete = state.tasks.findIndex(task => task.id === action.payload.id);
        if (indexToDelete !== -1) {
          state.tasks.splice(indexToDelete, 1);
        }
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
