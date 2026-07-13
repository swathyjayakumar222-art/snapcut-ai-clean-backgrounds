import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms — SnapCut AI" }] }),
  component: () => (
    <div className="min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-3xl px-6 py-20 text-muted-foreground">
        <h1 className="mb-6 text-4xl font-bold text-foreground">Terms of Service</h1>
        <p>By using SnapCut AI you agree to fair-use limits, our acceptable-use policy, and the billing terms of your selected plan. You retain all rights to images you upload.</p>
      </section>
      <Footer />
    </div>
  ),
});
