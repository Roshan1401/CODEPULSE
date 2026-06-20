import { useEffect, useState } from "react";
import type { RankUser } from "../types/types";
import type { RankingFilters } from "../queries/fetchRankings";
import { fetchRankings } from "../queries/fetchRankings";

export function useRankings(filters: RankingFilters) {
  const [data, setData] = useState<RankUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadRankings = async () => {
      setLoading(true);
      setError(null);

      try {
        const rankings = await fetchRankings(filters);
        if (!cancelled) {
          setData(rankings);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Failed to load rankings",
          );
          setData([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadRankings();
    return () => {
      cancelled = true;
    };
  }, [
    filters.mode,
    filters.period,
    filters.country,
    filters.state,
    filters.city,
  ]);

  return { data, loading, error };
}
