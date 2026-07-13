import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — SnapCut AI" },
      { name: "description", content: "Free forever plan, Pro at $12/mo, and pay-as-you-go API. Simple SnapCut AI pricing." },
    ],
  }),
  component: Pricing,
});

const plans = [
  { name: "Free", price: "$0", tag: "forever", perks: ["5 images / day", "Up to 2K resolution", "Watermark-free", "24h auto-delete"], cta: "Start free", href: "/register" },
  { name: "Pro", price: "$12", tag: "/ month", perks: ["Unlimited images", "5000×5000 output", "Batch & bulk export", "Priority queue", "Email support"], featured: true, cta: "Upgrade to Pro", href: "/register" },
  { name: "API", price: "$0.02", tag: "/ image", perks: ["Pay as you go", "REST API + keys", "99.5% uptime SLA", "Team analytics", "Slack support"], cta: "Get API keys", href: "/api-docs" },
];

function Pricing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <p className="text-sm font-medium text-[var(--neon-2)]">Pricing</p>
          <h1 className="mt-2 text-5xl font-bold tracking-tight">Fair pricing for real work</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Start free. Upgrade when you need more. Cancel anytime.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`glass-card relative rounded-2xl p-8 ${p.featured ? "border-[var(--neon)]/50 shadow-glow" : ""}`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-3)] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-5xl font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.tag}</span>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--neon-2)]" />
                    <span className="text-muted-foreground">{perk}</span>
                  </li>
                ))}
              </ul>
              <Link to={p.href} className="mt-8 block">
                <Button className={`w-full ${p.featured ? "bg-gradient-to-r from-[var(--neon)] to-[var(--neon-3)] text-white" : "bg-white/5 hover:bg-white/10"}`} variant={p.featured ? "default" : "outline"}>
                  {p.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-3xl">
          <h2 className="mb-6 text-center text-2xl font-bold">Frequently asked</h2>
          <div className="space-y-3">
            {faq.map((f) => (
              <div key={f.q} className="glass-card rounded-xl p-5">
                <div className="font-medium">{f.q}</div>
                <div className="mt-1 text-sm text-muted-foreground">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const faq = [
  { q: "Do you store my images?", a: "No — files are auto-deleted after 24 hours. We never train on your content." },
  { q: "Can I cancel Pro anytime?", a: "Yes. Cancel from Billing at any time; you keep access until the end of the period." },
  { q: "What payment methods do you accept?", a: "All major cards, UPI, and net banking via Razorpay." },
  { q: "Is there a free API tier?", a: "Yes — 100 free API calls / month for developers to try SnapCut in production." },
];
