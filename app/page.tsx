import Link from "next/link";

export default function Home() {
  return (
    <section>
      <p>
        <strong>Welcome</strong>
      </p>
      <h1>
        <strong>Hi, I&apos;m Alaniel Salada.</strong>
      </h1>
      <p>
        I love programming and music, and I&apos;m building projects as I
        continue learning and growing.
      </p>
      <br />
      <Link href="/projects">
        <strong>See my projects</strong>
      </Link>
    </section>
  );
}