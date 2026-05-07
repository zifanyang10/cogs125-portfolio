import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-10 flex gap-6 text-sm text-neutral-300">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>
        </nav>

        <p className="text-sm uppercase tracking-[0.3em] text-neutral-400 mb-3">
          {project.course}
        </p>

        <h1 className="text-5xl font-bold mb-6">{project.title}</h1>

        <p className="text-xl text-neutral-300 leading-8 mb-10">
          {project.description}
        </p>

        <section className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">Problem</h2>
          <p className="text-neutral-300 leading-7">{project.problem}</p>
        </section>

        <section className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-3">Design Direction</h2>
          <p className="text-neutral-300 leading-7">{project.solution}</p>
        </section>

        <Link
          href="/projects"
          className="inline-block rounded-full border border-neutral-700 px-5 py-3 text-sm font-semibold hover:bg-white hover:text-black transition"
        >
          ← Back to all projects
        </Link>
      </div>
    </main>
  );
}