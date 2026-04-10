import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const TaskInput = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [dueTime, setDueTime] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title, dueTime);
      setTitle('');
      setDueTime('');
      setError('');
    } else {
      setError('First write the task in the input field!');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <div className="flex gap-2">
            <input
              type="time"
              value={dueTime}
              onChange={(e) => setDueTime(e.target.value)}
              className="px-2 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-1"
            >
              <Plus size={18} />
              <span className="hidden sm:inline">Add Task</span>
            </button>
          </div>
        </div>
      </form>
      {error && (
        <p className="text-red-500 text-sm mb-2">
          {error}
        </p>
      )}
    </div>
  );
};

export default TaskInput;
