import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My new shiny Next App</title>
        <meta
          name="description"
          content="Clean slate NextJS app with Tailwindcss"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-200 flex flex-col justify-center items-center w-screen h-screen">
        <h1 className="text-3xl">Welcome to Next.js!</h1>
        <span className="p-8">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </span>
      </main>
    </div>
  );
}
