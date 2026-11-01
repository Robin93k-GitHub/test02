"use client";

export default function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="다크모드 전환"
      className="fixed right-4 top-4 rounded-full border-2 border-emerald-800 bg-white px-3 py-2 text-sm font-semibold shadow-sm hover:bg-emerald-50 dark:border-emerald-400 dark:bg-zinc-900 dark:hover:bg-zinc-800"
    >
      <span className="dark:hidden">🌙 다크</span>
      <span className="hidden dark:inline">☀️ 라이트</span>
    </button>
  );
}
