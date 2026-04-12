"use client";

import { useState } from "react";

type TaskStatus = "todo" | "doing" | "done"

type Task = {
  id: number;
  title: string;
  category: string;
  status: Taskstatus;
};


type StatesCardProps = {
  label: string;
  value: number;
};

type TaskItemProps = {
  task: Task;
  onAdvanceStatus: (id: number) => void;
}

const initialTasks: Task[] = [
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

function StatesCard({ label, value }: StatesCardProps) {
  return(
    <article className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <p className="text-sm text-zinc-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-zinc-900">{value}</p>
    </article>
  );
}

function TaskItem({ task, onAdvanceStatus }: TaskItemProps){
  const actionLabel = task.status == "done" ? "Restart" : "Next status";
  
  return (
    <li className="flex items-center justify-between rounded-2xl border-zinc-200 bg-white px-4 shadow-sm">
      <div> 
        <h2 className="text-lg font-semibold">(task.title)</h2>
          <p className="mt-1 text-sm text-zinc-600">
            {task.category} / {task.status}
          </p>
      </div>

      <button
        type="button"
        onClick={() => onAdvanceStatus(task.id)}
        className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
        >
          {actionLabel}
        </button>
    </li>
  )
}

function getNextStatus(currentStatus: TaskStatus): TaskStatus{
  if(currentStatus == "todo")
      return "doing";
  if(currentStatus == "doing")
    return "done";
  return "todo";
}

export default function Home(){
  // const firstTask: Task = tasks[0];
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const doneCount = tasks.filter((task) => task.status == "done").length;
  const activeCount = tasks.length -doneCount;
   function handleAdvanceStatus(id: number) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, status: getNextStatus(task.status) }
          : task,
      ),
    );
  }


  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200">
        <header className="space-y-3" > 
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Step 05
        </p>
        <h1 className="text-4xl font-semibold"> Components and Props</h1>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          <StatesCard label="Total tasks" value={tasks.length} />
          <StatesCard label="Active tasks" value={activeCount} />
        </section>

        <ul className="space-y-4">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onAdvanceStatus={handleAdvanceStatus}
            />
          ))}
        </ul>


        </div>
    </main>

  )

}