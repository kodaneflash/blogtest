import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Provider } from "../utils/Provider";

const montserrat = Montserrat({
  weight: 'variable', // Use 'variable' to cover all weight variations
  style: ['normal', 'italic'],  // Include 'italic' if needed
  subsets: ["latin"]            // Common subset for English content
});

export const metadata: Metadata = {
  metadataBase: new URL("https://next-cms-blog-ce.vercel.app/"),
  // title: "Dev Blook - A blog for developers",
  title: {
    default: "Dev Blook - A blog for developers",
    template: '%s | Dev Blook - A blog for developers'
  },
  description: "A blog for developers by developers!",
  openGraph: {
    title: "Dev Blook - A blog for developers",
    description: "A blog for developers by developers!",
    type: "website",
    locale: "en_US",
    url: "https://next-cms-blog-ce.vercel.app/",
    siteName: "DevBlook"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500`}
      >
        <Provider>
          <Navbar />
          <main className="h-full mx-auto max-w-5xl px-6">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
