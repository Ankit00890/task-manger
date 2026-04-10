import React, { useState } from 'react';
import { Trash2, CheckCircle, Circle, Edit3, Save, X, Clock } from 'lucide-react';

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    if (newTitle.trim()) {
      onEdit(task.id, { title: newTitle });
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`flex items-center gap-4 p-3 bg-white border border-gray-200 rounded shadow-sm ${
        task.completed ? 'bg-gray-50 text-gray-400' : 'hover:bg-gray-50'
      }`}
    >
      <button
        onClick={() => onToggle(task.id, !task.completed)}
        className={`flex-shrink-0 ${
          task.completed ? 'text-green-500' : 'text-gray-400 hover:text-blue-500'
        }`}
      >
        {task.completed ? <CheckCircle size={24} /> : <Circle size={24} />}
      </button>

      <div className="flex-grow min-w-0">
        {isEditing ? (
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full border border-blue-400 rounded px-2 py-1 text-gray-800 focus:outline-none"
              autoFocus
            />
            <button
              onClick={handleEdit}
              className="p-1 text-green-400 hover:bg-green-400/10 rounded"
            >
              <Save size={18} />
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="p-1 text-red-400 hover:bg-red-400/10 rounded"
            >
              <X size={18} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col">
            <span
              className={`block truncate text-lg ${
                task.completed ? 'line-through text-gray-400' : 'text-gray-800'
              }`}
            >
              {task.title}
            </span>
            {task.dueTime && (
              <span className="flex items-center gap-1 text-xs text-blue-500 mt-1">
                <Clock size={12} />
                {task.dueTime}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 text-gray-500 hover:text-blue-600 rounded"
          >
            <Edit3 size={18} />
          </button>
        )}
        <button
          onClick={() => onDelete(task.id)}
          className="p-1 text-gray-500 hover:text-red-500 rounded"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
