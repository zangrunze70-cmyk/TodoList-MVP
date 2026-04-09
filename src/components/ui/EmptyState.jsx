// src/components/ui/EmptyState.jsx

// 第一性原理：
// 空状态不是“可有可无”
// 它是产品在“没有数据”时给用户的反馈

export default function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
      <h3 className="text-lg font-semibold text-slate-800 mb-2">
        暂无符合条件的任务
      </h3>
      <p className="text-slate-500">
        你可以添加一个新任务，或者调整筛选条件与搜索关键词。
      </p>
    </div>
  );
}
