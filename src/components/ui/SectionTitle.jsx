export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  titleClassName = "",
  subtitleClassName = "",
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className={`text-3xl uppercase tracking-tight md:text-5xl ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-3 font-retro text-[11px] uppercase tracking-[0.2em] text-primary ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
