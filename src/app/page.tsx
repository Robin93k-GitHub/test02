import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-16">
      <ThemeToggle />
      {/* 상단: 원형 프로필 사진 + 이름 + 한줄 소개 */}
      <Profile name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />
      {/* 하단: 링크 카드 3개 (세로 배치) */}
      <ul className="mt-10 flex flex-col gap-6">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard id={link.id} title={link.title} url={link.url} />
          </li>
        ))}
      </ul>
    </main>
  );
}
