import AddTaskForm from './component/AddTaskForm';
import TaskList from './component/TaskList';

const App = () => {

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 16 }}>
      <h2>Todo List</h2>
     <AddTaskForm/>
     <TaskList/>

    </div>
  );
};

export default App;
