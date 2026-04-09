// src/utils/helpers.js

// 第一性原理：
// 组件负责展示
// 纯计算逻辑尽量抽出去
// 这样组件更干净，逻辑更容易复用和维护

export function getFilteredTasks(tasks, filter, searchTerm) {
  let result = tasks;

  // 1. 按完成状态筛选
  if (filter === "active") {
    result = result.filter((task) => !task.completed);
  } else if (filter === "completed") {
    result = result.filter((task) => task.completed);
  }

  // 2. 按关键词搜索
  if (searchTerm.trim()) {
    result = result.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }

  return result;
}

export function getTaskStats(tasks) {
  const normalizedTasks = Array.isArray(tasks) ? tasks : [];
  const total = normalizedTasks.length;
  const completed = normalizedTasks.filter((task) => task.completed).length;
  const active = total - completed;

  return {
    total,
    completed,
    active,
  };
}
