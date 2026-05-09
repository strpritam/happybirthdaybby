import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { useState, useEffect } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [attempts, setAttempts] = useState(3);

  useEffect(() => {
    const storedAuth = localStorage.getItem("portalAuth");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePasswordSubmit = () => {
    if (password === "foryou") {
      setIsAuthenticated(true);
      localStorage.setItem("portalAuth", "true");
    } else {
      setAttempts(attempts - 1);
      setPassword("");
      if (attempts - 1 <= 0) {
        alert("Access Denied! Too many attempts 😌");
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        fontFamily: "system-ui, sans-serif",
      }}>
        <div style={{
          textAlign: "center",
          padding: "40px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          maxWidth: "400px",
        }}>
          <h1 style={{ color: "#fff", marginBottom: "20px", fontSize: "28px" }}>
            🔐 Secret Code Required
          </h1>
          <p style={{ color: "#ddd", marginBottom: "20px" }}>
            Enter the secret code to unlock this birthday surprise
          </p>
          <input
            type="password"
            placeholder="Enter secret code 💗"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handlePasswordSubmit()}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "none",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />
          <button
            onClick={handlePasswordSubmit}
            style={{
              width: "100%",
              padding: "12px",
              background: "#fbbf24",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => e.currentTarget.style.background = "#f59e0b"}
            onMouseOut={(e) => e.currentTarget.style.background = "#fbbf24"}
          >
            Unlock 💕
          </button>
          <p style={{ color: "#aaa", marginTop: "20px", fontSize: "14px" }}>
            Attempts remaining: {attempts}
          </p>
        </div>
      </div>
    );
  }

  return <Outlet />;
}
