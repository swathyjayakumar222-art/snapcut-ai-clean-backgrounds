import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const posts = [
  { title: "How we hit sub-5s cutouts", tag: "Engineering", date: "Jul 8, 2026" },
  { title: "5 ways ecom teams use SnapCut", tag: "Product", date: "Jun 24, 2026" },
  { title: "Fine hair, glass, and other hard edges", tag: "AI", date: "Jun 3, 2026" },
];

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Blog — SnapCut AI" }] }),
  component: () => (
    <div className="min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-medium text-[var(--neon-2)]">Blog</p>
        <h1 className="mt-2 text-5xl font-bold tracking-tight">From the SnapCut team</h1>
        <div className="mt-10 grid gap-4">
          {posts.map((p) => (
            <div key={p.title} className="glass-card flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6 transition hover:border-[var(--neon)]/40">
              <div>
                <span className="text-xs uppercase tracking-widest text-[var(--neon-2)]">{p.tag}</span>
                <h2 className="mt-1 text-xl font-semibold">{p.title}</h2>
              </div>
              <span className="text-sm text-muted-foreground">{p.date}</span>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  ),
});
