type Taskstatus = "todo" | "doing" | "done"

type Task = {
  id: number;
  title: string;
  category: string;
  status: Taskstatus;
};


const tasks: Task[] = [
  {id: 1, title: "Read JSX basics", category: "React", status: "done"},
  {
    id: 2,
    title: "Practice useState",
    category: "React",
    status: "doing",  
  },
  {
    id: 3,
    title: "Review TypeScript types",
    category: "TypeScript",
    status: "todo",
  },
];


export default function Home(){
  const firstTask: Task = tasks[0];

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Step 02
        </p>
        <h1 className="mt-4 text-4xl font-semibold"> Typed Task Data</h1>

        <div className="mt-6 space-y-3 text-zinc-700">
          <p> Total tasks: {tasks.length}</p>
          <p> First task title: {firstTask.title}</p>
          <p> First task category: {firstTask.category}</p>
          <p> First task status: {firstTask.status}</p>
        </div>
      </div>
    </main>

  )

}