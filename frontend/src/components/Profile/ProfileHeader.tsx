import { useState } from "react";
import banner from "../../assets/banner.jpg";
import profilImg from "../../assets/image.png";
import {
  SocialLinkModal,
  platforms,
  type SocialLink,
} from "../Modals/SocialLinkModal";
import EditModal from "../Modals/EditModal";

interface Props {}

function SocialLinkButton({
  svg,
  label,
  url,
}: {
  svg: React.ReactNode;
  label: string;
  url?: string;
}) {
  const Component = url ? "a" : "button";
  return (
    <Component
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-fit cursor-pointer items-center gap-3 rounded-lg border border-(--color-border-secondary) px-3 py-1.5 text-(--color-text-primary) shadow-2xl transition-colors hover:border-orange-400"
    >
      {svg}
      <span className="text-md font-medium">{label}</span>
    </Component>
  );
}

function ProfileHeader(props: Props) {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    {
      platform: "github",
      label: "GitHub",
      svg: platforms[0].svg,
      url: "https://github.com/roshanpatil",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setzIsEditModalOpen] = useState(false);

  const handleAddLink = (link: SocialLink) => {
    setSocialLinks([...socialLinks, link]);
  };

  return (
    <div>
      <SocialLinkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddLink={handleAddLink}
        existingPlatforms={socialLinks.map((l) => l.platform)}
      />

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setzIsEditModalOpen(false)}
      />

      <div className="relative">
        <div className="h-70 overflow-hidden border border-(--color-border) bg-black">
          <img
            src={banner}
            className="h-full w-full object-cover"
            alt="Banner"
          />
        </div>
        <div className="absolute -bottom-25 left-1/8 size-50 -translate-x-1/2 transform overflow-hidden rounded-full border-2 border-orange-400 transition-all duration-200 hover:scale-105 dark:border-black">
          <img
            src={profilImg}
            className="h-full w-full object-cover"
            alt="Profile"
          />
        </div>
      </div>
      <div className="relative pt-32">
        <div className="flex flex-col gap-2 px-10">
          <span className="text-4xl font-bold text-(--color-text-primary)">
            Roshan Patil
          </span>
          <span className="text-xl text-(--color-text-secondary)">
            @patilrosha99
          </span>
          <span className="mt-2 text-xl text-(--color-text-primary)">
            Learning web dev
          </span>
          <div className="mt-7 flex items-center gap-5">
            {socialLinks.map((link) => (
              <SocialLinkButton
                key={link.platform}
                svg={link.svg}
                label={link.label}
                url={link.url}
              />
            ))}

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex cursor-pointer items-center justify-center rounded-full border border-(--color-border-secondary) px-2 py-2 text-center text-3xl transition-all duration-100 hover:scale-115 hover:border-orange-400"
            >
              <svg
                className="h-6 w-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7 7V5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute top-29 right-5 p-4">
          <button
            onClick={() => setzIsEditModalOpen(true)}
            className="flex w-fit cursor-pointer items-center gap-3 rounded-lg border border-(--color-border-secondary) bg-orange-500 px-4 py-2 text-white shadow-2xl transition-all duration-100 hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.1 2.1 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621" />
              <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
            </svg>
            <span className="text-xl font-bold">Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
