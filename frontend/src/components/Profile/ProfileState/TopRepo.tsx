import { GitFork } from "lucide-react";
import { Link } from "lucide-react";

interface Repo {
  name: string;
  stars: number;
  language: string;
  description: string;
  forks: number;
  updatedAt: string;
}

const demoRepos: Repo[] = [
  {
    name: "Devsteak",
    stars: 42,
    language: "TypeScript",
    description: "Developer contribution tracking platform",
    forks: 8,
    updatedAt: "2 days ago",
  },
  {
    name: "react-dashboard",
    stars: 128,
    language: "JavaScript",
    description: "Modern React dashboard template",
    forks: 45,
    updatedAt: "1 week ago",
  },
  {
    name: "vite-plugin-template",
    stars: 89,
    language: "TypeScript",
    description: "Quick start Vite plugin template",
    forks: 12,
    updatedAt: "3 days ago",
  },
];

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  React: "bg-cyan-400",
};

function TopRepo() {
  return (
    <div className="flex w-full flex-col gap-5 px-7 py-3">
      {demoRepos.map((repo, index) => (
        <div
          key={repo.name}
          className="cursor-pointer rounded-lg border border-(--color-border) bg-(--color-bg-secondary) px-4 py-8 transition-colors hover:border-orange-500/30"
        >
          <div className="flex items-start justify-between">
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-6 w-6 text-(--color-text-secondary)"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-xl font-semibold text-(--color-text-primary)">
                    {repo.name}
                  </span>
                  {index === 0 && (
                    <span className="rounded-full border border-orange-500/50 bg-orange-500/10 px-2 py-0.5 text-[10px] font-medium text-orange-500">
                      Top
                    </span>
                  )}
                </div>
                <button className="flex-end flex text-(--color-text-primary)">
                  <Link className="h-5 w-5" />
                </button>
              </div>
              <p className="pl-9 text-sm text-(--color-text-secondary)">
                {repo.description}
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-4 pl-9 text-sm">
            <span className="flex items-center gap-1.5 text-(--color-text-secondary)">
              <span
                className={`h-3 w-3 rounded-full ${languageColors[repo.language] || "bg-gray-400"}`}
              />
              {repo.language}
            </span>
            <span className="flex items-center gap-1 text-(--color-text-secondary)">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              {repo.stars.toLocaleString()}
            </span>
            <span className="flex items-center gap-1 text-(--color-text-secondary)">
              <GitFork className="h-4 w-4" />
              {repo.forks}
            </span>
            <span className="ml-auto text-(--color-text-secondary)">
              Updated {repo.updatedAt}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopRepo;
