import ThemeToggle from "../ui/ThemeToggle";
export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-2xl font-bold">Mini Redux TOdo App</h1>
      <ThemeToggle />
    </header>
  );
}
