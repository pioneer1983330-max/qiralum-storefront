type Props = {
  src: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain" | "natural";
  position?: string;
};

export function TempPhoto({ src, alt, className, fit = "natural", position = "center" }: Props) {
  const imgClass =
    fit === "natural"
      ? "block h-auto w-full"
      : `absolute inset-0 h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`;

  return (
    <figure className={`relative overflow-hidden ${className ?? ""}`} data-asset={src}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={imgClass} style={fit === "natural" ? undefined : { objectPosition: position }} />
    </figure>
  );
}
