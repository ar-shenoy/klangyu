import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const themeBoot = `try{var raw=localStorage.getItem("klangyu");if(raw){var s=JSON.parse(raw).state||{};var theme=(s.settings&&s.settings.theme)||"dark";var palette=(s.settings&&s.settings.palette)||"default";if(theme==="auto"){theme=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=theme;document.documentElement.dataset.palette=palette}}catch(e){}`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Klangyu" },
      { name: "theme-color", content: "#14161C" },
      { name: "description", content: "Klangyu plays the music you already own. Smart queues, Automix, lyrics and Klangbild, on your device." },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="en" data-theme="dark" data-palette="default" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
