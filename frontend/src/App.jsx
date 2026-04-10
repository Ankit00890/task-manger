import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListChecks, LayoutGrid, CheckCircle2, Clock } from 'lucide-react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

// Hardcoded backend URL for production so Vercel can connect automatically
const API_URL = 'https://task-manger-3wy9.onrender.com/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title, dueTime) => {
    try {
      const response = await axios.post(API_URL, { title, dueTime });
      setTasks([response.data, ...tasks]);
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Error adding task. Check your connection.');
    }
  };

  const toggleTask = async (id, completed) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, { completed });
      setTasks(tasks.map(t => t.id === id ? response.data : t));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const editTask = async (id, updates) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updates);
      setTasks(tasks.map(t => t.id === id ? response.data : t));
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <ListChecks size={32} className="text-blue-600" />
            <h1 className="text-3xl font-bold">
              Task Manager
            </h1>
          </div>
          <p className="text-gray-600">
            A simple app to keep track of your tasks
          </p>
        </header>

        {/* Input Section */}
        <section className="mb-8">
          <TaskInput onAdd={addTask} />
        </section>

        {/* Filters and Stats */}
        <section className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-2">
            {[
              { id: 'all', label: 'All' },
              { id: 'pending', label: 'Pending' },
              { id: 'completed', label: 'Completed' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                className={`px-3 py-1 rounded border ${
                  filter === item.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div>
              Total: <strong>{tasks.length}</strong>
            </div>
            <div>
              Pending: <strong>
                {tasks.filter(t => !t.completed).length}
              </strong>
            </div>
          </div>
        </section>

        {/* Task List */}
        <section>
          {loading ? (
            <div className="text-center py-8 text-gray-500">
              Loading tasks...
            </div>
          ) : (
            <TaskList
              tasks={tasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
              onEdit={editTask}
              filter={filter}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
