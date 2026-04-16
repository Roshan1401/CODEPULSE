interface props {
  languages: { label: string; hours: number }[];
  getColor: (index: number) => string;
}

export default function LangStateList({ languages, getColor }: props) {
  return (
    <div className="scrollbar-hide flex h-full flex-col gap-4 overflow-y-auto [scrollbar-width:none]">
      {languages.map((lang, index) => (
        <List
          key={index}
          language={lang.label}
          hours={lang.hours}
          color={getColor(index)}
        />
      ))}
    </div>
  );
}

function List({
  language,
  hours,
  color,
}: {
  language: string;
  hours: number;
  color: string;
}) {
  return (
    <div className="flex cursor-pointer items-center justify-between gap-2 rounded-2xl border border-(--color-border) bg-(--color-bg-primary) px-5 py-4 transition-colors duration-200 hover:bg-(--color-bg-secondary)">
      <div className="flex items-center gap-4">
        <span
          className="h-5 w-5 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span className="text-xl font-semibold text-(--color-text-primary)">
          {language}
        </span>
      </div>

      <div className="flex flex-col">
        <span className="text-xl font-semibold text-(--color-text-primary)">
          {hours}
        </span>
        <span className="text-sm font-medium text-(--color-text-secondary)">
          50.3%
        </span>
      </div>
    </div>
  );
}
