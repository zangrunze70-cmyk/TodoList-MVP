export function uiReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    }

    case "SET_THEME": {
      return {
        ...state,
        theme: action.payload.theme,
      };
    }

    case "SET_FILTER": {
      return {
        ...state,
        filter: action.payload.filter,
      };
    }

    case "SET_SEARCH_TERM": {
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      };
    }
    default:
      return state;
  }
}
