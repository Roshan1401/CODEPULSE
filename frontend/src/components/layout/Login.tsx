import { useEffect, useState } from "react";

const AuthPage = () => {
  const [blink, setBlink] = useState(true);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = (provider: "github" | "twitter") => {
    setStatus(provider);
    // your oauth logic here
    // signIn(provider)
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="w-full max-w-md overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#0d0d0d]">
        <div className="flex items-center gap-2 border-b border-[#2a2a2a] bg-[#1a1a1a] px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[13px] text-[#666]">
            devsteak — auth
          </span>
        </div>

        <div className="p-7 font-mono">
          <div className="mb-5">
            <p className="mb-1 text-[13px] text-[#666]">$ whoami</p>
            <p className="text-[13px] text-[#e05c5c]">→ not authenticated</p>
          </div>

          <div className="mb-6">
            <p className="mb-1 text-[13px] text-[#666]">
              $ devsteak login --provider
            </p>
            <p className="text-[13px] text-[#aaa]">
              → select a provider to continue:
            </p>
          </div>

          <button
            onClick={() => handleLogin("github")}
            className="mb-3 flex w-full cursor-pointer items-center gap-3 rounded-lg border border-[#30363d] bg-[#161b22] p-4 transition-colors duration-200 hover:border-[#e05c5c]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#aaa">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            <div className="flex-1 text-left">
              <p className="text-[13px] text-[#e6edf3]">[ 1 ] GitHub</p>
              <p className="mt-0.5 text-[11px] text-[#666]">
                continue with github oauth
              </p>
            </div>
            <span className="text-[11px] text-[#444]">↵</span>
          </button>

          <button
            onClick={() => handleLogin("twitter")}
            className="mb-6 flex w-full cursor-pointer items-center gap-3 rounded-lg border border-[#30363d] bg-[#0d1117] p-4 transition-colors duration-200 hover:border-[#e05c5c]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#aaa">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <div className="flex-1 text-left">
              <p className="text-[13px] text-[#e6edf3]">[ 2 ] Twitter / X</p>
              <p className="mt-0.5 text-[11px] text-[#666]">
                continue with twitter oauth
              </p>
            </div>
            <span className="text-[11px] text-[#444]">↵</span>
          </button>

          <div className="border-t border-[#1e1e1e] pt-4">
            {status ? (
              <p className="text-[13px] text-[#666]">
                → connecting to <span className="text-[#e05c5c]">{status}</span>
                {"... "}
                <span className="text-[#e05c5c]">_</span>
              </p>
            ) : (
              <p className="text-[13px] text-[#666]">
                → awaiting input...{" "}
                <span
                  className="text-[#e05c5c]"
                  style={{ opacity: blink ? 1 : 0 }}
                >
                  _
                </span>
              </p>
            )}
          </div>

          <div className="mt-5 flex gap-4">
            <span className="text-[11px] text-[#444]">terms</span>
            <span className="text-[11px] text-[#444]">·</span>
            <span className="text-[11px] text-[#444]">privacy</span>
            <span className="text-[11px] text-[#444]">·</span>
            <span className="text-[11px] text-[#444]">devsteak v1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
