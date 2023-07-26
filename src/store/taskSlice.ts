import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

    },

    removeTask(state, action: PayloadAction<string>) {

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