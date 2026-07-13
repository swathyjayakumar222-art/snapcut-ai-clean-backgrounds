import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — SnapCut AI" }] }),
  component: () => (
    <div className="min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-lg px-6 py-20">
        <p className="text-sm font-medium text-[var(--neon-2)]">Contact</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Talk to a human</h1>
        <p className="mt-2 text-muted-foreground">We reply within one business day.</p>
        <form className="glass-card mt-8 space-y-4 rounded-2xl p-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5"><Label htmlFor="n">Name</Label><Input id="n" /></div>
          <div className="space-y-1.5"><Label htmlFor="e">Email</Label><Input id="e" type="email" /></div>
          <div className="space-y-1.5"><Label htmlFor="m">Message</Label><Textarea id="m" rows={5} /></div>
          <Button className="w-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-3)] text-white shadow-glow">Send message</Button>
        </form>
      </section>
      <Footer />
    </div>
  ),
});
