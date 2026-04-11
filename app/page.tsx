"use client";

import { useState } from "react";

type Topic = {
  id: number;
  name: string;
};

const topics: Topic[] = [
  { id: 1, name: "Variables" },
  { id: 2, name: "Types" },
  { id: 3, name: "useState" },
];

export default function Home() {
  const courseName: string = "React + TypeScript";
  const [count, setCount] = useState<number>(0);

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900">
      <div className="mx-auto flex max-w-2xl flex-col gap-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Practice Page
          </p>
          <h1 className="text-3xl font-semibold">{courseName}</h1>
          <p className="text-base leading-7 text-zinc-600">
            This page shows a variable, a typed array, and a simple state
            example.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Topics</h2>
          <ul className="space-y-2">
            {topics.map((topic) => (
              <li
                key={topic.id}
                className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
              >
                {topic.name}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Counter</h2>
          <p className="text-base text-zinc-600">
            Current count:{" "}
            <span className="font-semibold text-zinc-900">{count}</span>
          </p>
          <button
            type="button"
            onClick={() => setCount(count + 1)}
            className="w-fit rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Add 1
          </button>
        </section>
      </div>
    </main>
  );
}
