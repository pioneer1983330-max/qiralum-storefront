type Props = {
  id: string;
  className?: string;
};

export function Placeholder({ id, className }: Props) {
  return (
    <figure className={className} data-asset={id}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/placeholders/${id}.svg`} alt={id} className="h-full w-full object-cover" />
      <figcaption className="sr-only">{id}</figcaption>
    </figure>
  );
}
