export default function ProgressBar({ percent, size = "md" }) {
  const clamped = percent === null || percent === undefined ? 0 : Math.max(0, Math.min(100, percent));
  const height = size === "sm" ? "h-1.5" : "h-2.5";

  return (
    <div className={`w-full overflow-hidden rounded-full bg-paper-line/70 ${height}`}>
      <div
        className="h-full rounded-full bg-chalk transition-[width] duration-300"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
