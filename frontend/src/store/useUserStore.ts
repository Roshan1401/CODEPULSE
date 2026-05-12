import { create } from "zustand";
import type { User as supabaseUser } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";

interface UserState {
  user: supabaseUser | null;
  loading: boolean;
  setUser: (user: supabaseUser | null) => void;
  setLoading: (loading: boolean) => void;
  initialize: () => Promise<void>;
  logOut: () => Promise<void>;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  initialize: async () => {
    set({ loading: true });

    const { data } = await supabase.auth.getSession();
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = data.session?.user ?? null;

    set({ user: user ?? null, loading: false });

    supabase.auth.onAuthStateChange((_event, session) => {
      set({ user: session?.user ?? null, loading: false });
    });
  },
  logOut: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
}));

export default useUserStore;
