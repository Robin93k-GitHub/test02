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
      className="block w-full rounded-3xl border border-white/60 bg-white/40 px-6 py-4 text-center font-medium tracking-tight shadow-[0_8px_30px_rgba(180,120,80,0.12)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_12px_36px_rgba(180,120,80,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] dark:hover:bg-white/10"
    >
      {title}
    </a>
  );
}
