import { useMemo, useState, useEffect } from "react";
import { FloatingTabs } from "../components/Rank/FloatingTabs";
import { Globe, MapPin } from "lucide-react";
import image from "../assets/image.png";
import { PeriodSelect } from "../components/Rank/PeriodSelect";
import { GlobalFilters } from "../components/Rank/GlobalFilters";
import { RegionFilters } from "../components/Rank/RegionFilters";
import { useLocationFilter } from "../hooks/useLocationFilter";
import useProfileStore from "../store/useProfileStore";
import type { FieldKey, Mode, Period } from "../types/types";
import { useRankings } from "../hooks/useRankings";
import { RankSkeleton } from "../Skeletons/RankSkeleton";
import { RankUser as RankUserComponent } from "../components/Rank/RankUser";

function Rank() {
  const [mode, setMode] = useState<Mode>(() => {
    const saved = localStorage.getItem("rankMode") as Mode;
    return saved || "global";
  });
  const [period, setPeriod] = useState<Period>(() => {
    const saved = localStorage.getItem("rankPeriod") as Period;
    return saved || "allTime";
  });
  const [selectedGlobalCountry, setSelectedGlobalCountry] =
    useState<string>("all");
  const [activeField, setActiveField] = useState<FieldKey>(() => {
    const saved = localStorage.getItem("rankActiveField") as FieldKey;
    return saved || "country";
  });

  const { profile } = useProfileStore();

  useEffect(() => {
    localStorage.setItem("rankMode", mode);
    localStorage.setItem("rankPeriod", period);
    localStorage.setItem("rankActiveField", activeField);
  }, [mode, period, activeField]);

  const {
    selectedCountry,
    selectedState,
    selectedCity,
    countryOptions,
    stateOptions,
    cityOptions,
    handleCountryChange,
    handleStateChange,
    setSelectedCity,
  } = useLocationFilter({
    country: profile?.country || "India",
    state: profile?.state || "all",
    city: profile?.city || "all",
  });

  const regionFetchFilters = useMemo(() => {
    if (activeField === "city") {
      return {
        country: selectedCountry,
        state: selectedState,
        city: selectedCity,
      };
    }
    if (activeField === "state") {
      return { country: selectedCountry, state: selectedState, city: null };
    }
    return { country: selectedCountry, state: null, city: null };
  }, [activeField, selectedCountry, selectedState, selectedCity]);

  const rankingFilters = useMemo(() => {
    if (mode === "global") {
      return {
        country: selectedGlobalCountry,
        state: null,
        city: null,
      };
    }
    return {
      country: regionFetchFilters.country,
      state: regionFetchFilters.state,
      city: regionFetchFilters.city,
    };
  }, [mode, selectedGlobalCountry, regionFetchFilters]);

  const {
    data: rankings,
    loading,
    error,
  } = useRankings({
    mode,
    period,
    ...rankingFilters,
  });

  return (
    <div className="flex flex-col gap-4 px-5 py-10 xl:px-15">
      <div className="flex items-center justify-between border-b border-zinc-300 pb-4 dark:border-zinc-700">
        <div>
          <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Developer Rankings
          </h1>
          <p className="text-sm text-zinc-400">
            Discover top developers in your region
          </p>
        </div>

        <div className="flex items-center gap-4">
          <FloatingTabs
            value={mode}
            tabs={[
              { value: "global", label: "Global", icon: <Globe /> },
              { value: "region", label: "Region", icon: <MapPin /> },
            ]}
            onChange={(value) => setMode(value as Mode)}
          />
          <PeriodSelect value={period} onChange={setPeriod} />
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 rounded-xl border border-zinc-300 bg-(--color-bg-secondary) px-4 py-4 dark:border-zinc-700">
        <div className="flex-1">
          {mode === "global" ? (
            <GlobalFilters
              selectedCountry={selectedGlobalCountry}
              onCountryChange={setSelectedGlobalCountry}
            />
          ) : (
            <RegionFilters
              countryOptions={countryOptions}
              stateOptions={stateOptions}
              cityOptions={cityOptions}
              selectedCountry={selectedCountry}
              selectedState={selectedState}
              selectedCity={selectedCity}
              onCountryChange={handleCountryChange}
              onStateChange={handleStateChange}
              onCityChange={setSelectedCity}
              activeField={activeField}
              setActiveField={setActiveField}
            />
          )}
        </div>
      </div>

      <div className="w-full rounded-md border border-zinc-300 dark:border-zinc-700">
        <div className="flex items-center justify-between gap-4 rounded-t-md border-b border-zinc-300 px-5 py-4 dark:border-zinc-700">
          <div className="max-w-sm text-center text-2xl font-medium text-(--color-text-primary) md:text-left">
            <span className="font-bold tracking-tight text-orange-500">
              Rohan Kumar
            </span>{" "}
            at the top, setting the standard for everyone else.
          </div>
          <img src={image} className="h-20 w-19 shrink-0" alt="Rank" />
        </div>
        <div className="text-md sticky top-0 z-10 hidden grid-cols-12 gap-4 bg-(--color-bg-secondary) px-8 py-4 font-semibold tracking-wide text-neutral-400 md:grid lg:px-4 xl:px-6">
          <div className="col-span-1 ml-1">Rank</div>
          <div className="col-span-4 ml-2 text-left">Developer</div>
          <div className="col-span-2 text-center">Time Spent</div>
          <div className="col-span-3 text-center">Streak</div>
          <div className="col-span-2 text-center">Location</div>
        </div>

        {loading ? (
          <RankSkeleton />
        ) : error ? (
          <div className="px-8 py-12 text-center text-sm text-red-500">
            {error}
          </div>
        ) : rankings.length === 0 ? (
          <div className="px-8 py-12 text-center text-sm text-(--color-text-secondary)">
            No developers found for the selected filters.
          </div>
        ) : (
          <div className="space-y-1">
            {rankings.map((user) => (
              <RankUserComponent key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Rank;
