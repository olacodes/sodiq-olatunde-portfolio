/** Small mono tech-tag used across experience and project cards. */
export function Chip({
  children,
  size = "md",
}: {
  children: React.ReactNode;
  size?: "sm" | "md";
}) {
  const sizing =
    size === "sm"
      ? "px-2 py-0.5 text-[0.62rem]"
      : "px-2.5 py-1 text-[0.68rem]";
  return (
    <span
      className={`rounded border border-line font-mono text-muted ${sizing}`}
    >
      {children}
    </span>
  );
}
