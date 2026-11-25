import Link from "next/link";

export default function Home() {
  return (
    <section>
      <p className="text-sm font-medium text-gray-600">Welcome</p>
      <h1 className="mt-3 text-4xl font-bold">Hi, I&apos;m Alaniel Salada.</h1>
      <p className="mt-5 max-w-xl leading-7 text-gray-700">
        I love programming and music, and I&apos;m building projects as I
        continue learning and growing.
      </p>
      <Link className="mt-6 inline-block underline" href="/projects">
        See my projects
      </Link>
    </section>
  );
}