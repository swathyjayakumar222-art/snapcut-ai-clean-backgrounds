import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ImageDown, Zap, CreditCard, Key } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — SnapCut AI" }] }),
  component: Dashboard,
});

const recent = [
  { name: "portrait-01.jpg", size: "2.1 MB", when: "2 min ago" },
  { name: "product-shot.png", size: "3.8 MB", when: "1 hour ago" },
  { name: "team-photo.webp", size: "4.2 MB", when: "Yesterday" },
  { name: "hero-model.jpg", size: "5.6 MB", when: "2 days ago" },
];

function Dashboard() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-[var(--neon-2)]">Dashboard</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight md:text-4xl">Welcome back</h1>
          </div>
          <Link to="/app">
            <Button className="bg-gradient-to-r from-[var(--neon)] to-[var(--neon-3)] text-white shadow-glow">
              <Zap className="mr-1.5 h-4 w-4" /> New cutout
            </Button>
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Stat icon={ImageDown} label="Processed today" value="3" sub="of 5 free" />
          <Stat icon={Zap} label="Avg. speed" value="4.2s" sub="last 20 jobs" />
          <Stat icon={CreditCard} label="Plan" value="Free" sub="upgrade to Pro" />
          <Stat icon={Key} label="API calls" value="0" sub="this month" />
        </div>

        <div className="mt-6 glass-card rounded-2xl p-6">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium">Daily quota</span>
            <span className="text-muted-foreground">3 / 5</span>
          </div>
          <Progress value={60} className="h-2" />
        </div>

        <div className="mt-8 glass-card overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
            <h2 className="font-semibold">Recent cutouts</h2>
            <span className="text-xs text-muted-foreground">Auto-deleted after 24 hours</span>
          </div>
          <table className="w-full text-sm">
            <thead className="text-xs uppercase tracking-widest text-muted-foreground">
              <tr>
                <th className="px-6 py-3 text-left font-medium">File</th>
                <th className="px-6 py-3 text-left font-medium">Size</th>
                <th className="px-6 py-3 text-left font-medium">Processed</th>
                <th className="px-6 py-3 text-right font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((r) => (
                <tr key={r.name} className="border-t border-white/5">
                  <td className="px-6 py-4">{r.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{r.size}</td>
                  <td className="px-6 py-4 text-muted-foreground">{r.when}</td>
                  <td className="px-6 py-4 text-right">
                    <Button size="sm" variant="outline" className="border-white/15 bg-white/5">Download</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value, sub }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; sub: string }) {
  return (
    <div className="glass-card rounded-2xl p-5">
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--neon)]/20 to-[var(--neon-3)]/20 text-[var(--neon-2)] ring-1 ring-white/10">
        <Icon className="h-4 w-4" />
      </div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 text-2xl font-bold">{value}</div>
      <div className="text-xs text-muted-foreground">{sub}</div>
    </div>
  );
}
