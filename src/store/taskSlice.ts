import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
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

const TASK_LIST_KEY = "tlk"
const localStorageDB = (db: WritableDraft<Todo>[]) => {
  localStorage.setItem(TASK_LIST_KEY, JSON.stringify(db))
}

const initialState: TodosState = {
  list: JSON.parse(localStorage.getItem(TASK_LIST_KEY) ?? "[]")
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

      localStorageDB(state.list)
    },

    removeTask(state, action: PayloadAction<string>) {
      state.list = state.list.filter(task => task.id !== action.payload);

      localStorageDB(state.list)
    },

    changeTask(state, action: PayloadAction<any>) {
      const textChange = state.list.find(task => task.id === action.payload.id);
      if (textChange) {
        textChange.title = action.payload.text
        textChange.hashtag = action.payload.text.split(' ').filter((word: string) => word[0] === "#")
        textChange.isChange = false
      }

      localStorageDB(state.list)
    },

    toggleIsChange(state, action: PayloadAction<string>) {
      const toggleIsChangeTask = state.list.find(task => task.id === action.payload);
      if (toggleIsChangeTask) {
        toggleIsChangeTask.isChange = true
      }

      localStorageDB(state.list)
    },

    toggleComplete(state, action: PayloadAction<string>) {
      const toggleCompleteTask = state.list.find(task => task.id === action.payload);
      if (toggleCompleteTask) {
        toggleCompleteTask.completed = !toggleCompleteTask.completed;
      }

      localStorageDB(state.list)
    }
  }
})

export const { addTask, removeTask, changeTask, toggleComplete, toggleIsChange } = taskSlice.actions;

export default taskSlice.reducer;