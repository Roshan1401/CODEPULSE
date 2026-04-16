import profilImg from "../../assets/image.png";

interface Props {}

function Rightbar(props: Props) {
  const {} = props;

  return (
    <div className="flex min-h-screen flex-col gap-6 border-l border-(--color-border) bg-(--color-bg-primary) px-7 py-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="size-30 overflow-hidden rounded-full border border-orange-400 dark:border-black">
          <img
            src={profilImg}
            className="h-full w-full object-cover"
            alt="Profile"
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-2xl font-semibold text-(--color-text-primary)">
            Roshan Patil
          </span>
          <span className="text-md text-(--color-text-secondary)">
            @patilrosha99
          </span>
          <span className="mt-2 text-lg text-(--color-text-secondary)">
            Learning React
          </span>
        </div>

        <button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-orange-500 px-4 py-2 text-xl font-semibold text-white shadow-2xl transition-all duration-200 hover:scale-102 hover:bg-orange-400">
          <span>View Profile</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5.5 w-5.5 text-white"
            viewBox="0 0 640 640"
            fill="currentColor"
          >
            <path d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xs font-semibold tracking-wider text-(--color-text-secondary) uppercase">
          Today's Activity
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="size-30 rounded-md border border-(--color-border) bg-(--color-bg-secondary) p-2 hover:border-orange-400">
            <div className="text-xs tracking-wider text-(--color-text-secondary) uppercase">
              Rank
            </div>
            <div className="mt-2 text-2xl font-bold text-(--color-text-primary)">
              —
            </div>
            <div className="mt-1 text-xs text-(--color-text-secondary)">
              Past 24h leaderboard
            </div>
          </div>
          <div className="rounded-md border border-(--color-border-secondary) bg-(--color-bg-secondary) p-3 hover:border-orange-400">
            <div className="text-xs tracking-wider text-(--color-text-secondary) uppercase">
              Streak
            </div>
            <div className="mt-2 text-2xl font-bold text-(--color-text-primary)">
              0 days
            </div>
            <div className="mt-1 text-xs text-(--color-text-secondary)">
              Current streak
            </div>
          </div>
          <div className="rounded-md border border-(--color-border-secondary) bg-(--color-bg-secondary) p-3 hover:border-orange-400">
            <div className="text-xs tracking-wider text-(--color-text-secondary) uppercase">
              Hours
            </div>
            <div className="mt-2 text-2xl font-bold text-(--color-text-primary)">
              0m
            </div>
            <div className="mt-1 text-xs text-(--color-text-secondary)">
              Past 24h
            </div>
          </div>
          <div className="rounded-md border border-(--color-border-secondary) bg-(--color-bg-secondary) p-3 hover:border-orange-400">
            <div className="text-xs tracking-wider text-(--color-text-secondary) uppercase">
              Lines
            </div>
            <div className="mt-2 text-2xl font-bold text-(--color-text-primary)">
              0
            </div>
            <div className="mt-1 text-xs text-(--color-text-secondary)">
              Past 24h
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-(--color-border-secondary) bg-(--color-bg-secondary) px-3 py-2 text-(--color-text-primary) transition-all hover:border-orange-500/50 hover:bg-orange-500/10 active:border-orange-500 active:bg-orange-500/20 active:text-orange-500">
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
          </svg>
          <span className="text-sm font-medium">Copy API token</span>
        </button>

        <div className="rounded-md border border-(--color-border-secondary) bg-(--color-bg-secondary) p-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-5 w-5 text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z" />
              </svg>
              <div className="flex flex-col">
                <div className="text-sm font-medium text-(--color-text-primary)">
                  Extension
                </div>
                <div className="text-xs text-(--color-text-secondary)">
                  IDE integration
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-orange-500">
              Inactive
            </span>
          </div>
          <button className="mt-3 w-full cursor-pointer rounded-md border border-(--color-border) bg-(--color-bg-primary) px-3 py-2 text-sm font-medium text-(--color-text-primary) transition-colors hover:border-orange-500/50 active:border-orange-500 active:bg-orange-500/20 active:text-orange-500">
            Test connection
          </button>
        </div>

        <button className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-orange-500/30 bg-(--color-bg-primary) px-3 py-2 text-sm font-bold text-orange-500 transition-colors hover:border-orange-500/60 active:border-orange-500 active:bg-orange-500/20 active:text-orange-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              fill="none"
              d="M13 12h9m0 0l-3.333-4M22 12l-3.333 4M14 7V5.174a2 2 0 0 0-2.166-1.993l-8 .666A2 2 0 0 0 2 5.84v12.32a2 2 0 0 0 1.834 1.993l8 .667A2 2 0 0 0 14 18.826V17"
            />
          </svg>
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}

export default Rightbar;
