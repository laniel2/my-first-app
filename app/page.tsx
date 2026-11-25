import Link from "next/link";

export default function Home() {
  return (
    <section className="flex min-h-[60vh] items-center">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          Welcome
        </p>
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
          Hi, I&apos;m Alaniel Salada.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I love programming and music, and I&apos;m building projects as I
          continue learning and growing.
        </p>
        <Link
          className="mt-8 inline-flex rounded-lg bg-sky-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
          href="/projects"
        >
          See my projects
        </Link>
      </div>
    </section>
  );
}