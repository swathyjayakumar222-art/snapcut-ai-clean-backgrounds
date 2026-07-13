import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Zap, Wand2, Layers, ImageDown, Code2, Shield, Sparkles, Users, LineChart } from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — SnapCut AI" },
      { name: "description", content: "Hair-perfect edges, batch processing, 4K output, and a developer API." },
    ],
  }),
  component: Features,
});

const items = [
  { icon: Zap, t: "Sub-5s processing", d: "Optimized inference pipeline delivers cutouts in under five seconds." },
  { icon: Wand2, t: "Hair-perfect edges", d: "Handles fine hair, fur, motion blur, and semi-transparent objects." },
  { icon: Layers, t: "Batch & bulk", d: "Drop a folder, walk away. ZIP export ready when you return." },
  { icon: ImageDown, t: "4K transparent PNG", d: "Up to 5000×5000, full alpha channel." },
  { icon: Code2, t: "Developer API", d: "REST endpoint with rotating keys, usage analytics, and rate limits." },
  { icon: Shield, t: "24h auto-delete", d: "Zero permanent storage. Encrypted in transit and at rest." },
  { icon: Sparkles, t: "Studio backgrounds", d: "One-click replace with solid colors or your own scene." },
  { icon: Users, t: "Team seats", d: "Shared credits, roles, and consolidated billing." },
  { icon: LineChart, t: "Live analytics", d: "Track throughput, costs, and error rates in real time." },
];

function Features() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <p className="text-sm font-medium text-[var(--neon-2)]">Features</p>
          <h1 className="mt-2 text-5xl font-bold tracking-tight">Everything you need to cut cleaner</h1>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div key={f.t} className="glass-card group rounded-2xl p-6 transition hover:border-[var(--neon)]/40 hover:shadow-glow">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon)]/20 to-[var(--neon-3)]/20 text-[var(--neon-2)] ring-1 ring-white/10">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
