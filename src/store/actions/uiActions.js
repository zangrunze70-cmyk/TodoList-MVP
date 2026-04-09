// src/store/actions/uiActions.js

export function toggleTheme() {
  return {
    type: "TOGGLE_THEME",
  };
}

export function setTheme(theme) {
  return {
    type: "SET_THEME",
    payload: { theme },
  };
}

export function setFilter(filter) {
  return {
    type: "SET_FILTER",
    payload: { filter },
  };
}

export function setSearchTerm(searchTerm) {
  return {
    type: "SET_SEARCH_TERM",
    payload: { searchTerm },
  };
}
