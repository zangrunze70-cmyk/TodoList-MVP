// src/store/actions/taskActions.js

// 第一性原理：
// action creator 不是必须
// 但它可以把 action 的结构统一起来
// 避免组件里到处写字符串和 payload 格式

export function addTask(title) {
  return {
    type: "ADD_TASK",
    payload: { title },
  };
}

export function deleteTask(id) {
  return {
    type: "DELETE_TASK",
    payload: { id },
  };
}

export function toggleTask(id) {
  return {
    type: "TOGGLE_TASK",
    payload: { id },
  };
}

export function editTask(id, title) {
  return {
    type: "EDIT_TASK",
    payload: { id, title },
  };
}

export function clearCompleted() {
  return {
    type: "CLEAR_COMPLETED",
  };
}
