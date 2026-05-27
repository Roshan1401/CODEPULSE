import type { range } from "../types/types";

export const getStartRange = (range: range): string => {
  const ms = {
    "24h": 24 * 60 * 60 * 1000,
    "7day": 7 * 24 * 60 * 60 * 1000,
    "30day": 30 * 24 * 60 * 60 * 1000,
  };

  return new Date(Date.now() - ms[range]).toISOString();
};
