"use client";

import { useState, type FormEvent } from "react";

type TaskStatus = "todo" | "doing" | "done";
type Priority = "low" | "medium" | "high";

type Task = {
  id: number;
  title: string;
  category: string;
  status: TaskStatus;
  priority: Priority;
};

type StatsCardProps = {
  label: string;
  value: number;
};

type TaskItemProps = {
  task: Task;
  onAdvanceStatus: (id: number) => void;
};

const categories: string[] = ["React", "TypeScript", "Next.js"];
const priorityOptions: Priority[] = ["low", "medium", "high"];

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Read JSX basics",
    category: "React",
    status: "done",
    priority: "medium",
  },
  {
    id: 2,
    title: "Practice useState",
    category: "React",
    status: "doing",
    priority: "high",
  },
  {
    id: 3,
    title: "Review TypeScript types",
    category: "TypeScript",
    status: "todo",
    priority: "high",
  },
];

function StatsCard({ label, value }: StatsCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <p className="text-sm text-zinc-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-zinc-900">{value}</p>
    </article>
  );
}

function TaskItem({ task, onAdvanceStatus }: TaskItemProps) {
  const actionLabel = task.status === "done" ? "Restart" : "Next status";

  return (
    <li className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="space-y-2">
        <p className="text-lg font-semibold text-zinc-900">{task.title}</p>
        <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-600">
          <span className="rounded-full bg-zinc-100 px-3 py-1">
            {task.category}
          </span>
          <span className="rounded-full bg-zinc-100 px-3 py-1">
            priority: {task.priority}
          </span>
          <span className="rounded-full bg-zinc-100 px-3 py-1">
            status: {task.status}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onAdvanceStatus(task.id)}
        className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
      >
        {actionLabel}
      </button>
    </li>
  );
}

function getNextStatus(currentStatus: TaskStatus): TaskStatus {
  if (currentStatus === "todo") {
    return "doing";
  }

  if (currentStatus === "doing") {
    return "done";
  }

  return "todo";
}

function formatLabel(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>(categories[0]);
  const [priority, setPriority] = useState<Priority>("medium");

  const doneCount = tasks.filter((task) => task.status === "done").length;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (trimmedTitle === "") {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: trimmedTitle,
      category,
      status: "todo",
      priority,
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
    setTitle("");
    setCategory(categories[0]);
    setPriority("medium");
  }

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
    <main className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Step 06
          </p>
          <h1 className="text-4xl font-semibold">Form and Add Task</h1>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          <StatsCard label="Total tasks" value={tasks.length} />
          <StatsCard label="Done tasks" value={doneCount} />
        </section>

        <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Add a task</h2>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-2 text-sm font-medium">
              Title
              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Build a small counter"
                className="rounded-2xl border border-zinc-300 px-4 py-3 font-normal outline-none transition focus:border-zinc-500"
              />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium">
                Category
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="rounded-2xl border border-zinc-300 px-4 py-3 font-normal outline-none transition focus:border-zinc-500"
                >
                  {categories.map((currentCategory) => (
                    <option key={currentCategory} value={currentCategory}>
                      {currentCategory}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium">
                Priority
                <select
                  value={priority}
                  onChange={(event) =>
                    setPriority(event.target.value as Priority)
                  }
                  className="rounded-2xl border border-zinc-300 px-4 py-3 font-normal outline-none transition focus:border-zinc-500"
                >
                  {priorityOptions.map((currentPriority) => (
                    <option key={currentPriority} value={currentPriority}>
                      {formatLabel(currentPriority)}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <button
              type="submit"
              disabled={title.trim() === ""}
              className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:bg-zinc-400"
            >
              Add task
            </button>
          </form>
        </article>

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
  );
}
