import { taskReducer } from "../store/reducers/taskReducer";
import { uiReducer } from "../store/reducers/uiReducer";

export function rootReducer(state, action) {
  return {
    tasks: taskReducer(state.tasks, action),
    ui: uiReducer(state.ui, action),
  };
}
