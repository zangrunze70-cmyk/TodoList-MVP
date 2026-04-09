// src/store/hooks/useAppDispatch.js

import { useContext } from "react";
import { AppDispatchContext } from "../contexts/AppDispatchContext";

export function useAppDispatch() {
  const context = useContext(AppDispatchContext);

  if (context === null) {
    throw new Error("useAppDispatch 必须在 AppProvider 内使用");
  }

  return context;
}
