type range = "24h" | "7day" | "30day";
interface UserActivityStats {
  rank: number | null;
  streak: number;
  timeSpent: number;
}

interface PublicProfile {
  profile: {
    id: string;
    name: string;
    username: string;
    bio: string | null;
    avatar_url: string;
  } | null;
  socialLinks:
    | {
        platform: string;
        url: string;
      }[]
    | null;
}

export type { range, UserActivityStats, PublicProfile };
