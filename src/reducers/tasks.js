import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "Watch video on actions & reducers", complete: true },
  { id: 2, text: "Follow redux codealong", complete: true },
  { id: 3, text: "Fork weekly assignment", complete: true },
  { id: 4, text: "Create a todo app", complete: false },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      const newTask = {
        id: state.length + 1,
        text: payload,
        complete: false,
      };

      state.push(newTask);
    },
    markTaskAsComplete: (state, { payload }) => {
      const taskItem = state.find((task) => task.id === payload.id);
      taskItem.complete = true;
    },
    markTaskAsNotComplete: (state, { payload }) => {
      const taskItem = state.find((task) => task.id === payload.id);
      taskItem.complete = false;
    },
  },
});

export const { addTask, markTaskAsComplete, markTaskAsNotComplete } =
  tasksSlice.actions;

export default tasksSlice.reducer;
