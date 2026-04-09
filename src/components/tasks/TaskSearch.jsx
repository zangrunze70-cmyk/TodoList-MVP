import { useAppState } from "../../store/hooks/useAppState";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { setSearchTerm } from "../../store/actions/uiActions";

export default function TaskSearch() {
  const { ui } = useAppState();
  const dispatch = useAppDispatch();

  return (
    <input
      type="text"
      value={ui.searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      placeholder="搜索任务"
      className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
    />
  );
}
