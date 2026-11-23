import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alaniel Salada",
  description: "Personal portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>{" "}
          <Link href="/about">About</Link>{" "}
          <Link href="/projects">Projects</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
