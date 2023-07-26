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
        hashtag: action.payload.split(' ').filter(el => el[0] === "#"),
        completed: false,
        isChange: false
      })
    },

    removeTask(state, action: PayloadAction<string>) {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },

    changeTask(state, action: PayloadAction<any>) {

    },

    toggleIsChange(state, action: PayloadAction<string>) {

    },

    toggleComplete(state, action: PayloadAction<string>) {

    }
  }
})

export const { addTask, removeTask, changeTask, toggleComplete, toggleIsChange } = taskSlice.actions;

export default taskSlice.reducer;