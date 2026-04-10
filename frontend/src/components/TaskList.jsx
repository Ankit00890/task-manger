import React from 'react';
import TaskItem from './TaskItem';
import { Inbox } from 'lucide-react';

const TaskList = ({ tasks, onToggle, onDelete, onEdit, filter }) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-gray-400">
        <Inbox size={48} strokeWidth={1} className="mb-2" />
        <p className="text-lg">No tasks found</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
