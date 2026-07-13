import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — SnapCut AI" }, { name: "description", content: "The story behind SnapCut AI." }] }),
  component: () => (
    <div className="min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-sm font-medium text-[var(--neon-2)]">About</p>
        <h1 className="mt-2 text-5xl font-bold tracking-tight">Cutting subjects. Not corners.</h1>
        <p className="mt-6 text-muted-foreground">
          SnapCut AI was built by a small team obsessed with the last 5% of an edge — the whisps of hair,
          the shine on a glass, the fuzz on a sweater. We think great cutouts shouldn't need Photoshop
          skills, an hour of your time, or a subscription to a bloated suite.
        </p>
        <p className="mt-4 text-muted-foreground">
          Today, thousands of designers, sellers, and studios trust SnapCut to ship cleaner visuals faster.
        </p>
      </section>
      <Footer />
    </div>
  ),
});
