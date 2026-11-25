import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alaniel Salada | Personal Site",
  description: "A personal site built with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <nav className="border-b border-slate-800 bg-slate-950/90">
          <div className="mx-auto flex max-w-5xl items-center gap-6 px-6 py-4">
            <span className="mr-auto font-semibold text-white">Alaniel Salada</span>
            <Link className="text-sm font-medium text-slate-300 transition hover:text-white" href="/">
              Home
            </Link>
            <Link className="text-sm font-medium text-slate-300 transition hover:text-white" href="/about">
              About
            </Link>
            <Link className="text-sm font-medium text-slate-300 transition hover:text-white" href="/projects">
              Projects
            </Link>
          </div>
        </nav>

        <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">{children}</main>
      </body>
    </html>
  );
}
