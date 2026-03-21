export default function BulletList({ items, markerClass }) {
  return (
    <ul className="space-y-2 text-base font-bold leading-relaxed text-slate-800">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className={markerClass}>*</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
