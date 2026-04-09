import { useEffect, useReducer } from "react";
import { AppStateContext } from "../store/hooks/useAppState";
import { AppDispatchContext } from "../store/contexts/AppDispatchContext";
import { rootReducer } from "./rootReducer";
import { initialState } from "./initialState";
import useLocalStorage from "../hooks/useLocalStorage";

export default function AppProvider({ children }) {
  const [persistedState, setPersistedState] = useLocalStorage(
    "mini-redux-state",
    initialState,
  );

  const safeInitialState =
    persistedState && Array.isArray(persistedState.tasks) && persistedState.ui
      ? persistedState
      : initialState;

  const [state, dispatch] = useReducer(rootReducer, safeInitialState);

  useEffect(() => {
    setPersistedState(state);
  }, [state, setPersistedState]);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}
