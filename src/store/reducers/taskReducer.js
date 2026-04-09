export function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK": {
      const title = action.payload.title.trim();

      if (!title) return state;
      const newTask = {
        id: Date.now(),
        title,
        completed: false,
        createdAt: Date.now(),
      };

      return [...state, newTask];
    }

    case "DELETE_TASK": {
      const taskID = action.payload.id;
      return state.filter((task) => task.id !== taskID);
    }

    case "TOGGLE_TASK": {
      const taskId = action.payload.id;

      return state.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      );
    }
    case "EDIT_TASK": {
      const { id, title } = action.payload;
      const trimmedTitle = title.trim();

      if (!trimmedTitle) return state;
      return state.map((task) =>
        task.id === id ? { ...task, title: trimmedTitle } : task,
      );
    }

    case "CLEAR_COMPLETED": {
      return state.filter((task) => !task.completed);
    }

    default:
      return state;
  }
}
