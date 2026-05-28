import { useState, useEffect } from "react";
import useUserStore from "../store/useUserStore";
import { supabase } from "../lib/supabase";

export function useExtensionStatus() {
  const { user } = useUserStore((state) => ({ user: state.user }));
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!user) return;

    supabase
      .from("profiles")
      .select("is_extension_active")
      .eq("id", user.id)
      .single()
      .then(({ data, error }) => {
        if (error) {
          console.error("Error fetching extension status:", error);
          setIsActive(false);
          return;
        }
        setIsActive(data?.is_extension_active);
      });

    const channel = supabase
      .channel("extension_status")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "profiles",
          filter: `id=eq.${user.id}`,
        },
        (payload) => {
          setIsActive(payload.new.is_extension_active);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);
  return isActive;
}
supabase;
