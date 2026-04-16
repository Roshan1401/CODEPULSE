import { useState } from "react";
interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    name?: string;
    username?: string;
    bio?: string;
  };
  onSave?: (data: { name: string; username: string; bio: string }) => void;
}
export default function EditModal({
  isOpen,
  onClose,
  initialData,
  onSave,
}: EditModalProps) {
  const [name, setName] = useState(initialData?.name || "");
  const [username, setUsername] = useState(initialData?.username || "");
  const [bio, setBio] = useState(initialData?.bio || "");
  if (!isOpen) return null;
  const handleSave = () => {
    if (onSave) {
      onSave({ name, username, bio });
    }
    onClose();
  };
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div
        className="w-[700px] rounded-2xl border border-(--color-border) bg-white p-8 dark:bg-[#0b0809]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-(--color-text-primary)">
            Edit Information
          </h2>
          <button
            onClick={onClose}
            className="cursor-pointer rounded-full p-2 text-neutral-800 hover:bg-neutral-200 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-lg font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-(--color-border) bg-transparent p-3 focus:ring-2 focus:ring-orange-500 focus:outline-none dark:text-white"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="mb-2 block text-lg font-medium text-gray-700 dark:text-gray-300">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-md border border-(--color-border) bg-transparent p-3 focus:ring-2 focus:ring-orange-500 focus:outline-none dark:text-white"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="mb-2 block text-lg font-medium text-gray-700 dark:text-gray-300">
              Bio
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value.slice(0, 150))}
              className="h-24 w-full resize-none rounded-md border border-(--color-border) bg-transparent p-3 focus:ring-2 focus:ring-orange-500 focus:outline-none dark:text-white"
              placeholder="Write something about yourself..."
            />
            <p className="mt-1 text-right text-sm text-gray-500 dark:text-gray-400">
              {bio.length}/150
            </p>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 cursor-pointer rounded-md border border-(--color-border) px-4 py-2 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 cursor-pointer rounded-md bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
