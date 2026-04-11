"use client";

import { useState } from "react";

type TaskStatus = "todo" | "doing" | "done"

type Task = {
  id: number;
  title: string;
  category: string;
  status: Taskstatus;
};


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
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Step 04
        </p>
        <h1 className="mt-4 text-4xl font-semibold">
          State and Actions
        </h1>
        <p className="mt-4 text-zinc-600"> 
          Done tasks: {doneCount}
        </p>

        <ul className="mt-8 space-y-4">
          {tasks.map((task)=> (
            <li
              key={task.id}
              className="flex items-center justify-between rounded-2xl border-zinc-200 px-4 py-4"
            >
              <div>
                <h2 className="text-lg font-semibold">
                  {task.title}
                </h2>
              <p className="mt-1 text-sm text-zinc-600">
                  {task.category} / {task.status}
              </p>
              </div>
              
              <button 
                type="button"
                onClick={() => handleAdvanceStatus(task.id)}
                className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transtion hover:bg-zinc-700"
              >
                Next status
              </button>
            </li>
          ))}
          </ul>
        </div>
    </main>

  )

}