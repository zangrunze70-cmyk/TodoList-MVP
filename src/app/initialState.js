export const initialState = {
  tasks: [
    {
      id: 1,
      title: "完成 mini Redux 核心骨架",
      completed: false,
      createdAt: Date.now(),
    },
    {
      id: 2,
      title: "继续写 TaskList 和 ThemeToggle",
      completed: true,
      createdAt: Date.now() + 1,
    },
  ],

  ui: { theme: "light", filter: "all", searchTerm: "" },
};
