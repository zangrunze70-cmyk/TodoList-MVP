import { useAppState } from "../../store/hooks/useAppState";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { toggleTheme } from "../../store/actions/uiActions";

export default function ThemeToggle() {
  const { ui } = useAppState();
  const dispatch = useAppDispatch();

  const isDark = ui.theme === "dark";

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={`px-4 py-2 rounded-lg font-medium transition ${isDark ? "bg-yellow-400 text-black hover:bg-yellow-300" : "bg-slate-900 text-white hover:bg-slate-700"}`}
    >
      当前主题：{ui.theme}
    </button>
  );
}
