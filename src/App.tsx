import './App.css';
import { TaskList } from './components/ListTasks/ListTasks';
import { NewTask } from './components/NewTask/NewTask';

function App() {
  return (
    <div className="App">
      <NewTask />
      <TaskList />
    </div>
  );
}

export default App;