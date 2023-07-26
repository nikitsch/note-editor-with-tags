import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

type Todo = {
  id: string;
  title: string;
  hashtag: Array<string>;
  completed: boolean;
  isChange: boolean;
}

type TodosState = {
  list: Todo[];
}

const initialState: TodosState = {
  list: []
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      state.list.push({
        id: v1(),
        title: action.payload,
        hashtag: action.payload.split(' ').filter((word: string) => word[0] === "#"),
        completed: false,
        isChange: false
      })
    },

    removeTask(state, action: PayloadAction<string>) {
      state.list = state.list.filter(task => task.id !== action.payload);
    },

    changeTask(state, action: PayloadAction<any>) {
      const textChange = state.list.find(task => task.id === action.payload.id);
      if (textChange) {
        textChange.title = action.payload.text
        textChange.hashtag = action.payload.text.split(' ').filter((word: string) => word[0] === "#")
        textChange.isChange = false
      }
    },

    toggleIsChange(state, action: PayloadAction<string>) {
      const toggleIsChangeTask = state.list.find(task => task.id === action.payload);
      if (toggleIsChangeTask) {
        toggleIsChangeTask.isChange = true
      }
    },

    toggleComplete(state, action: PayloadAction<string>) {
      const toggleCompleteTask = state.list.find(task => task.id === action.payload);
      if (toggleCompleteTask) {
        toggleCompleteTask.completed = !toggleCompleteTask.completed;
      }
    }
  }
})

export const { addTask, removeTask, changeTask, toggleComplete, toggleIsChange } = taskSlice.actions;

export default taskSlice.reducer;