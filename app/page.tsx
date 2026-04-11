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


function formatLabel(value:string): string{
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function Home(){
  const firstTask: Task = tasks[0];

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Step 03
        </p>
        <h1 className="mt-4 text-4xl font-semibold"> Render a List</h1>

        <ul className="mt-8 space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="rounded-2xl border border-zinc-200 px-4 py-4"
          >
            <h2 className="text-lg font-semibold">
              {task.title}
            </h2> 
            <p className="mt-2 text-sm text-zinc-600">
              category: {task.category}
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              status: {formatLabel(task.status)}
            </p>
          </li>
          ))}
        </ul>

        </div>
    </main>

  )

}