type Props = {
  src: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain" | "natural";
};

export function TempPhoto({ src, alt, className, fit = "natural" }: Props) {
  const imgClass =
    fit === "natural"
      ? "block h-auto w-full"
      : fit === "contain"
        ? "h-full w-full object-contain"
        : "h-full w-full object-cover";

  return (
    <figure className={className} data-asset={src}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={imgClass} />
    </figure>
  );
}
