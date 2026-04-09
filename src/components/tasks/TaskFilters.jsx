// src/components/tasks/TaskFilters.jsx

import { useAppState } from "../../store/hooks/useAppState";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { setFilter } from "../../store/actions/uiActions";

// 第一性原理：
// 这个组件只负责“切换当前筛选条件”
// 不负责真正筛选任务
// 真正筛选任务的逻辑放到 helpers 里

const FILTERS = [
  { label: "全部", value: "all" },
  { label: "进行中", value: "active" },
  { label: "已完成", value: "completed" },
];

export default function TaskFilters() {
  const { ui } = useAppState();
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-wrap gap-2">
      {FILTERS.map((item) => {
        const isActive = ui.filter === item.value;

        return (
          <button
            key={item.value}
            onClick={() => dispatch(setFilter(item.value))}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
