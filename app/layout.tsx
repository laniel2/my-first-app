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
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <nav className="border-b border-gray-200">
          <div className="mx-auto flex max-w-4xl items-center gap-6 px-6 py-5">
            <span className="mr-auto font-bold">Alaniel Salada</span>
            <Link className="text-sm hover:underline" href="/">
              Home
            </Link>
            <Link className="text-sm hover:underline" href="/about">
              About
            </Link>
            <Link className="text-sm hover:underline" href="/projects">
              Projects
            </Link>
          </div>
        </nav>

        <main className="mx-auto max-w-4xl px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
