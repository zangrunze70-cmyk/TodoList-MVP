// src/pages/Dashboard.jsx

import Header from "../components/layout/Header";
import TaskForm from "../components/tasks/TaskForm";
import TaskFilters from "../components/tasks/TaskFilters";
import TaskSearch from "../components/tasks/TaskSearch";
import TaskList from "../components/tasks/TaskList";
import StatsCard from "../components/ui/StatsCard";
import { useAppState } from "../store/hooks/useAppState";

// 第一性原理：
// 页面组件不处理复杂规则
// 它负责把模块按信息结构组合起来
// 这就是页面层的职责

export default function Dashboard() {
  const { ui } = useAppState();
  const isDark = ui.theme === "dark";

  return (
    <div
      className={`min-h-screen transition ${
        isDark ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"
      }`}
    >
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        <StatsCard />

        <section
          className={`rounded-2xl p-6 shadow-sm border ${
            isDark
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">创建任务</h2>
          <TaskForm />
        </section>

        <section
          className={`rounded-2xl p-6 shadow-sm border space-y-4 ${
            isDark
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <TaskFilters />
            <div className="w-full md:w-72">
              <TaskSearch />
            </div>
          </div>

          <TaskList />
        </section>
      </main>
    </div>
  );
}
