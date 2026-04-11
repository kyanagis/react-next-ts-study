

export default function Home() {
  const pagetitle: string = "学習用!!!";
  const description: string =
    "React,Typescriptを用いたダッシュボードを学習用に作成するための一歩目!";
  
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200">
        <p className="text-1xl font-medium uppercase tracking-[0.2em] text-zinc-500">
          step1
        </p>
        <h1 className="mt-4 text-4xl font-semibold">{pagetitle}</h1>
        <p className="mt-4 leading-7 text-zinc-600">{description}</p>
      </div>
    </main>
  );
}