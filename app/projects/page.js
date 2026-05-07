import Link from "next/link";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-10 flex gap-6 text-sm text-neutral-300">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/projects" className="text-white font-semibold">
            Projects
          </Link>
        </nav>

        <section className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400 mb-3">
            Selected Work
          </p>
          <h1 className="text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-neutral-300 max-w-2xl">
            A small collection of design and research projects from my recent
            coursework, focusing on interaction design, user research, and
            interface prototyping.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 hover:bg-neutral-800 transition"
            >
              <p className="text-sm text-neutral-400 mb-2">{project.course}</p>
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-neutral-300 text-sm leading-6">
                {project.description}
              </p>
              <p className="mt-6 text-sm font-semibold">View project →</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}