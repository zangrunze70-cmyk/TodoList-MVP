import { createContext, useContext } from "react";
export const AppStateContext = createContext(null);

export function useAppState() {
  const context = useContext(AppStateContext);

  if (context === null) {
    throw new Error("useAppState 必须在AppProvidr内使用");
  }
  return context;
}
