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
      className="fixed right-4 top-4 rounded-full border border-white/60 bg-white/40 px-3 py-2 text-sm font-medium shadow-[0_4px_16px_rgba(180,120,80,0.12)] backdrop-blur-md transition hover:bg-white/60 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      <span className="dark:hidden">🌙 다크</span>
      <span className="hidden dark:inline">☀️ 라이트</span>
    </button>
  );
}
