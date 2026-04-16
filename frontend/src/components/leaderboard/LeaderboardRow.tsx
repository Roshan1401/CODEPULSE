import { useState } from "react";

interface Props {}
type LeaderboardRow = "24 Hours" | "7 Days" | "30 Days";

function LeaderboardRow(props: Props) {
  const {} = props;
  const days: LeaderboardRow[] = ["24 Hours", "7 Days", "30 Days"];
  const [activeRow, setActiveRow] = useState<LeaderboardRow>("24 Hours");

  return (
    <div className="inline-flex items-center justify-center gap-2 rounded-4xl border border-(--color-border) bg-neutral-900 px-5 py-1">
      {days.map((day) => {
        const isActive = activeRow === day;
        return (
          <button
            key={day}
            type="button"
            onClick={() => setActiveRow(day)}
            className={[
              "text-md cursor-pointer rounded-4xl px-6 py-2 font-bold transition-colors",
              isActive
                ? "bg-(--color-bg-primary) text-(--color-text-primary)"
                : "text-(--color-text-secondary)",
            ].join(" ")}
          >
            {day}
          </button>
        );
      })}
    </div>
  );
}

export default LeaderboardRow;
