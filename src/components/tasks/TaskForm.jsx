import { useState } from "react";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { addTask } from "../../store/actions/taskActions";

export default function TaskForm() {
  const [title, setTitle] = useState(""); // 组件局部状态，管理输入框
  const dispatch = useAppDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(addTask(title)); // 发动作，更新全局 state
    setTitle(""); // 清空输入框
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="请输入任务标题"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        添加
      </button>
    </form>
  );
}
