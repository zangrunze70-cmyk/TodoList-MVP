// src/components/ui/StatsCard.jsx

import { useAppState } from "../../store/hooks/useAppState";
import { getTaskStats } from "../../utils/helpers";

// 第一性原理：
// 统计卡片是“只读组件”
// 它不改状态，只根据 state 计算并展示结果

export default function StatsCard() {
  const { tasks } = useAppState();
  const stats = getTaskStats(tasks);

  return (
    <section className="grid grid-cols-3 gap-3">
      <div className="rounded-xl bg-white border border-slate-200 p-4">
        <p className="text-sm text-slate-500 mb-1">总任务</p>
        <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
      </div>

      <div className="rounded-xl bg-white border border-slate-200 p-4">
        <p className="text-sm text-slate-500 mb-1">已完成</p>
        <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
      </div>

      <div className="rounded-xl bg-white border border-slate-200 p-4">
        <p className="text-sm text-slate-500 mb-1">进行中</p>
        <p className="text-2xl font-bold text-blue-600">{stats.active}</p>
      </div>
    </section>
  );
}
