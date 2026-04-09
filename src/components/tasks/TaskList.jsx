// src/components/tasks/TaskList.jsx

import { useAppState } from "../../store/hooks/useAppState";
import { getFilteredTasks } from "../../utils/helpers";
import TaskItem from "./TaskItem";
import EmptyState from "../ui/EmptyState";

// 第一性原理：
// TaskList 负责：
// 1. 读取全局任务数据
// 2. 读取筛选条件和搜索关键词
// 3. 根据这些条件得到最终要显示的任务
// 4. 渲染列表或空状态

export default function TaskList() {
  const { tasks, ui } = useAppState();

  const filteredTasks = getFilteredTasks(tasks, ui.filter, ui.searchTerm);

  if (filteredTasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-3">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
