import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "링크나무 | 김남준",
  description: "내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하세요.",
};

// 첫 렌더 전에 저장된 테마(또는 시스템 설정)를 적용해 깜빡임 방지
const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
