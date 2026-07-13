import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Sparkles, Zap, Shield, Wand2, ImageDown, Code2, Layers, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SnapCut AI — Instant AI background removal" },
      { name: "description", content: "Studio-grade background removal in under 5 seconds. Upload, cut, download. Free to start." },
      { property: "og:title", content: "SnapCut AI — Instant AI background removal" },
      { property: "og:description", content: "Studio-grade background removal in under 5 seconds." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LogosStrip />
      <Features />
      <HowItWorks />
      <ApiCta />
      <PricingPreview />
      <FinalCta />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-24">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-[var(--neon-2)]" />
          Powered by next-gen segmentation AI
        </div>
        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Cut out anything.
          <br />
          <span className="text-gradient-brand italic">In one snap.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          SnapCut AI removes backgrounds from any photo in under 5 seconds —
          hair, fur, transparent glass, and all the edges you actually care about.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link to="/app">
            <Button size="lg" className="bg-gradient-to-r from-[var(--neon)] to-[var(--neon-3)] text-white shadow-glow-lg hover:brightness-110">
              Remove a background free
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/api-docs">
            <Button size="lg" variant="outline" className="border-white/15 bg-white/5">
              <Code2 className="mr-1 h-4 w-4" /> Developers
            </Button>
          </Link>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">No credit card • 5 free images / day</p>

        <HeroShowcase />
      </div>
    </section>
  );
}

function HeroShowcase() {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-r from-[var(--neon)]/25 via-[var(--neon-2)]/15 to-[var(--neon-3)]/25 blur-3xl" />
      <div className="glass-card overflow-hidden rounded-3xl p-2 shadow-glow-lg">
        <div className="grid grid-cols-2 gap-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
              alt="Original"
              className="h-full w-full object-cover"
            />
            <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/80 backdrop-blur">
              Before
            </span>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl checker-bg">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
              alt="Cut out"
              className="h-full w-full object-cover"
              style={{
                WebkitMaskImage: "radial-gradient(ellipse 45% 60% at 50% 45%, black 60%, transparent 78%)",
                maskImage: "radial-gradient(ellipse 45% 60% at 50% 45%, black 60%, transparent 78%)",
              }}
            />
            <span className="absolute left-3 top-3 rounded-full bg-[var(--neon)]/90 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white backdrop-blur">
              SnapCut
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogosStrip() {
  const items = ["Studio", "Pixelworks", "Northwind", "Lumen", "Kraft & Co", "Halcyon"];
  return (
    <div className="border-y border-white/5 bg-white/[0.02] py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6 text-sm font-medium text-muted-foreground/70">
        <span className="text-xs uppercase tracking-widest">Trusted by teams at</span>
        {items.map((n) => (
          <span key={n} className="opacity-70">{n}</span>
        ))}
      </div>
    </div>
  );
}

function Features() {
  const features = [
    { icon: Zap, title: "Sub-5s processing", desc: "Optimized inference pipeline delivers cutouts before your coffee gets cold." },
    { icon: Wand2, title: "Hair-perfect edges", desc: "Handles fine hair, fur, motion blur, and semi-transparent objects like glass." },
    { icon: Layers, title: "Batch & bulk", desc: "Drop a folder, walk away. Bulk processing with automatic ZIP export." },
    { icon: ImageDown, title: "4K transparent PNG", desc: "Up to 5000×5000, full alpha. Drop straight into Figma, PS, or your CMS." },
    { icon: Code2, title: "Developer API", desc: "REST endpoint, keys, and per-request billing. Ship background removal in an hour." },
    { icon: Shield, title: "Auto-deletes in 24h", desc: "Zero permanent storage. Enterprise-grade encryption end to end." },
  ];
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <p className="text-sm font-medium text-[var(--neon-2)]">Features</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Built for edges that matter</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="glass-card group relative rounded-2xl p-6 transition hover:border-[var(--neon)]/40 hover:shadow-glow">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon)]/20 to-[var(--neon-3)]/20 text-[var(--neon-2)] ring-1 ring-white/10">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Upload", d: "Drag & drop a JPG, PNG or WEBP. Up to 10MB, 5000×5000." },
    { n: "02", t: "AI cuts", d: "Our segmentation model isolates your subject with pixel-precise masks." },
    { n: "03", t: "Download", d: "Grab a transparent PNG, or push it straight through the API." },
  ];
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <p className="text-sm font-medium text-[var(--neon-2)]">How it works</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Three steps. One clean cutout.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="glass-card relative overflow-hidden rounded-2xl p-8">
            <div className="text-6xl font-bold text-gradient-brand opacity-40">{s.n}</div>
            <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ApiCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="glass-card grid gap-8 overflow-hidden rounded-3xl p-8 md:grid-cols-2 md:p-12">
        <div>
          <p className="text-sm font-medium text-[var(--neon-2)]">Developer API</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Ship background removal <span className="text-gradient-brand">in an afternoon</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            REST-first, per-request billing, generous free tier. Rotate keys, track usage, throttle bursts.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/api-docs"><Button className="bg-gradient-to-r from-[var(--neon)] to-[var(--neon-3)] text-white">Read the docs</Button></Link>
            <Link to="/pricing"><Button variant="outline" className="border-white/15 bg-white/5">See API pricing</Button></Link>
          </div>
        </div>
        <div className="glass-card overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 font-mono text-xs leading-relaxed text-muted-foreground">
          <div className="mb-3 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>
          <pre className="whitespace-pre-wrap">
<span className="text-[var(--neon-2)]">curl</span> https://api.snapcut.ai/v1/remove {"\\"}
  -H <span className="text-[var(--neon-3)]">"Authorization: Bearer $SNAPCUT_KEY"</span> {"\\"}
  -F image=@portrait.jpg {"\\"}
  -o cutout.png

<span className="text-green-400/80"># 200 OK  ·  4.2s  ·  transparent PNG 2048×2048</span>
          </pre>
        </div>
      </div>
    </section>
  );
}

function PricingPreview() {
  const plans = [
    { name: "Free", price: "$0", tag: "Forever", perks: ["5 images / day", "Up to 2K resolution", "Watermark-free"], cta: "Start free", href: "/register" },
    { name: "Pro", price: "$12", tag: "/ month", perks: ["Unlimited images", "5000×5000 output", "Batch processing", "Priority queue"], featured: true, cta: "Go Pro", href: "/pricing" },
    { name: "API", price: "$0.02", tag: "/ image", perks: ["Pay-as-you-go", "99.5% uptime SLA", "Team keys & analytics"], cta: "Get API keys", href: "/api-docs" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <p className="text-sm font-medium text-[var(--neon-2)]">Pricing</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Simple. Honest. Scales with you.</h2>
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
              <Button
                className={`w-full ${p.featured ? "bg-gradient-to-r from-[var(--neon)] to-[var(--neon-3)] text-white" : "bg-white/5 hover:bg-white/10"}`}
                variant={p.featured ? "default" : "outline"}
              >
                {p.cta}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <div className="glass-card relative overflow-hidden rounded-3xl p-12 shadow-glow-lg">
        <div className="mx-auto mb-4 flex justify-center">
          <Logo className="h-14 w-14" />
        </div>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Your next cutout is <span className="text-gradient-brand italic">one snap away</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Join thousands of designers, sellers, and studios shipping cleaner visuals with SnapCut AI.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/app">
            <Button size="lg" className="bg-gradient-to-r from-[var(--neon)] to-[var(--neon-3)] text-white shadow-glow">
              Launch the app
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
