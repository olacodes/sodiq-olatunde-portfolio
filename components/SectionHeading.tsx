import { Reveal } from "./Reveal";

export function SectionHeading({
  tag,
  index,
  title,
  kicker,
}: {
  tag: string;
  index: string;
  title: string;
  kicker?: string;
}) {
  return (
    <Reveal className="mb-12">
      <p className="mono-label mb-4 flex items-center gap-3">
        <span className="text-ochre">{index}</span>
        <span className="h-px w-8 bg-line" />
        <span>{tag}</span>
      </p>
      <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-none font-semibold tracking-tight">
        {title}
      </h2>
      {kicker && (
        <p className="mt-4 max-w-2xl text-lg text-muted">{kicker}</p>
      )}
    </Reveal>
  );
}
