import { useState } from "react";
import DonutChart from "./DonutChart";
import BarChart2 from "./BarChart";
import LangStateList from "./LangStateList";

type LanguageDatum = { label: string; hours: number };
type ChartType = "Donut" | "Bar";

export default function LangChart() {
  const languages: LanguageDatum[] = [
    { label: "JavaScript", hours: 120 },
    { label: "Python", hours: 80 },
    { label: "TypeScript", hours: 60 },
    { label: "Go", hours: 40 },
    { label: "Rust", hours: 20 },
    { label: "C++", hours: 10 },
    { label: "Java", hours: 5 },
    { label: "Ruby", hours: 2 },
    { label: "PHP", hours: 1 },
    { label: "PHP", hours: 1 },
    { label: "PHP", hours: 1 },
    { label: "PHP", hours: 1 },
    { label: "PHP", hours: 1 },
  ];

  const getColor = (index: number) => {
    const colors = [
      "#f97316",
      "#2563eb",
      "#10b981",
      "#a855f7",
      "#ef4444",
      "#14b8a6",
      "#f59e0b",
      "#64748b",
    ];
    return colors[index % colors.length];
  };

  const charts: ChartType[] = ["Donut", "Bar"];
  const [activeTab, setActiveTab] = useState<ChartType>("Donut");

  const totalHours = languages.reduce((sum, l) => sum + l.hours, 0);

  return (
    <div className="w-full rounded-xl border border-(--color-border) bg-white dark:bg-[#1b1718]/50">
      <div className="flex items-center justify-between border-b border-(--color-border) px-7 py-3">
        <div className="flex flex-col">
          <span className="text-md text-xl font-semibold text-(--color-text-primary)">
            Language Distribution
          </span>
          <span className="font-medium text-(--color-text-secondary)">
            Total: {totalHours}h
          </span>
        </div>

        <div className="flex flex-row items-center rounded-full border border-neutral-700 bg-neutral-900 p-1">
          {charts.map((chart) => (
            <button
              key={chart}
              type="button"
              onClick={() => setActiveTab(chart)}
              className={[
                "text-md flex-1 cursor-pointer rounded-full px-8 py-2.5 font-semibold tracking-tight transition-colors",
                activeTab === chart
                  ? "bg-white text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-200",
              ].join(" ")}
            >
              {chart}
            </button>
          ))}
        </div>
      </div>

      <div className="flex h-112.5 items-stretch gap-8 overflow-hidden px-6 py-12">
        <div className="flex min-w-0 flex-1 items-center justify-center">
          {activeTab === "Donut" ? (
            <DonutChart languages={languages} getColor={getColor} />
          ) : (
            <BarChart2 languages={languages} getColor={getColor} />
          )}
        </div>

        <div className="h-full w-100 shrink-0 overflow-hidden">
          <LangStateList languages={languages} getColor={getColor} />
        </div>
      </div>
    </div>
  );
}
