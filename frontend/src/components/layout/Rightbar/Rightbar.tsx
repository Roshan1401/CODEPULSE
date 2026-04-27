import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabase";
import ProfileSection from "./ProfileSection";
import ActivitySection from "./ActivitySection";
import ActionsSection from "./ActionsSection";
import useUserStore from "../../../store/useUserStore";
import { ExternalLinkIcon } from "lucide-react";
import { Skeleton } from "boneyard-js/react";

function Rightbar() {
  const user = useUserStore((state) => state.user);
  const loading = useUserStore((state) => state.loading);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("An error occurred while logging out. Please try again.");
    }
  };

  return (
    <Skeleton name="right-bar" loading={loading}>
      <div className="flex min-h-screen flex-col gap-6 border-l border-(--color-border) bg-(--color-bg-primary) px-7 py-6 lg:w-55 xl:w-75">
        {!user ? (
          <div className="mt-15">
            <h2 className="xl:text-md text-center text-sm font-semibold text-(--color-text-secondary)">
              Please log in to view your profile and activity.
            </h2>
            <button
              className="text-md mt-5 flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-orange-500 px-4 py-1 font-medium text-white shadow-2xl transition-all duration-200 hover:scale-102 hover:bg-orange-400 xl:text-lg"
              onClick={() => navigate("/login")}
            >
              <span>Log in </span>
              <ExternalLinkIcon className="h-4 w-4 xl:h-5 xl:w-5" />
            </button>
          </div>
        ) : (
          <>
            <ProfileSection />
            <ActivitySection />
            <ActionsSection handleLogout={handleLogout} />
          </>
        )}
      </div>
    </Skeleton>
  );
}

export default Rightbar;
