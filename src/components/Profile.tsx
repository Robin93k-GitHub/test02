type ProfileProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="size-40 overflow-hidden rounded-full border-2 border-emerald-700 bg-emerald-100 sm:size-48">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageUrl} alt={`${name} 프로필 사진`} className="size-full object-cover" />
        ) : (
          <div className="flex size-full items-center justify-center text-4xl font-bold text-emerald-700">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h1 className="mt-5 text-2xl font-bold">{name}</h1>
      <p className="mt-1 text-base text-emerald-900/70 dark:text-emerald-100/70">{bio}</p>
    </header>
  );
}
