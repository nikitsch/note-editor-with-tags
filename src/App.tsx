import './App.css';
import { TaskList } from './store/components/ListTasks/ListTasks';
import { NewTask } from './store/components/NewTask/NewTask';

function App() {
  return (
    <div className="App">
      <NewTask />
      <TaskList />
    </div>
  );
}

export default App;