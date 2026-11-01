"use client";

type LinkCardProps = {
  id: string;
  title: string;
  url: string;
};

export default function LinkCard({ id, title, url }: LinkCardProps) {
  function recordClick() {
    const data = new Blob([JSON.stringify({ id })], { type: "application/json" });
    navigator.sendBeacon("/api/click", data);
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="block w-full rounded-2xl border-2 border-emerald-800 bg-white px-5 py-4 text-center font-semibold shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 dark:border-emerald-400 dark:bg-zinc-900 dark:hover:bg-zinc-800"
    >
      {title}
    </a>
  );
}
