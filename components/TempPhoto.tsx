type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function TempPhoto({ src, alt, className }: Props) {
  return (
    <figure className={className} data-asset={src}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </figure>
  );
}
