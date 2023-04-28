import Head from "next/head";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Golden Learn</title>
        <meta
          name="description"
          content="Application for learning languages with the gold list method"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-slate-50">
        <div className="text-zinc-900 px-24 py-16">
          <header className="space-y-4">
            <p className="text-8xl">Golden Learn</p>
            <p className="text-lg">
              Application for learning languages with the gold list method
            </p>
          </header>
          <Link
            href="/notes"
            className="mt-6 w-min whitespace-nowrap flex items-center space-x-2 px-3 py-1 text-white text-lg font-normal bg-amber-600 border rounded-md"
          >
            <span>Get started</span>
            <ArrowRightIcon className="h-5" />
          </Link>
        </div>
      </main>
    </>
  );
}
