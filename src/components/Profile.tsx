type ProfileProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="size-[150px] shrink-0 overflow-hidden rounded-full border-4 border-white/80 bg-orange-100 shadow-[0_12px_32px_rgba(180,110,70,0.28),0_2px_6px_rgba(180,110,70,0.15)] dark:border-white/15 dark:shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageUrl} alt={`${name} 프로필 사진`} className="size-full object-cover" />
        ) : (
          <div className="flex size-full items-center justify-center text-4xl font-bold text-orange-700">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs text-balance text-sm leading-relaxed text-[#3b2f2a]/65 dark:text-[#f3e9e1]/65">
        {bio}
      </p>
    </header>
  );
}
