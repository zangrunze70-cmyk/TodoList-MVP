// src/components/tasks/TaskItem.jsx

import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { deleteTask, toggleTask } from "../../store/actions/taskActions";

// 第一性原理：
// 单个任务项负责：
// 1. 展示任务内容
// 2. 提供完成/删除操作
// 3. 不直接改 state，只 dispatch action

export default function TaskItem({ task }) {
  const dispatch = useAppDispatch();

  return (
    <div
      className={`flex items-center justify-between rounded-xl border p-4 transition ${
        task.completed
          ? "bg-green-50 border-green-200"
          : "bg-white border-slate-200"
      }`}
    >
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id))}
          className="w-4 h-4"
        />

        <div className="flex-1">
          <p
            className={`font-medium ${
              task.completed ? "line-through text-slate-400" : "text-slate-800"
            }`}
          >
            {task.title}
          </p>

          <p className="text-xs text-slate-400 mt-1">ID: {task.id}</p>
        </div>
      </div>

      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="ml-4 px-3 py-1.5 rounded-lg text-sm font-medium bg-red-50 text-red-600 hover:bg-red-100"
      >
        删除
      </button>
    </div>
  );
}
