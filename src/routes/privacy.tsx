import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy — SnapCut AI" }] }),
  component: () => (
    <div className="min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-3xl px-6 py-20 text-muted-foreground">
        <h1 className="mb-6 text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p>SnapCut AI processes images only long enough to return a cutout. All uploaded and generated files are automatically deleted within 24 hours. We never train models on your content.</p>
        <p className="mt-4">For full details on data handling, subprocessors, and your rights, contact privacy@snapcut.ai.</p>
      </section>
      <Footer />
    </div>
  ),
});
