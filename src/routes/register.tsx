import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogoLockup } from "@/components/Logo";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Create account — SnapCut AI" }] }),
  component: Register,
});

function Register() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto flex max-w-md flex-col px-6 py-16">
        <div className="mb-8 flex justify-center"><LogoLockup size="lg" /></div>
        <div className="glass-card rounded-2xl p-8 shadow-glow">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="mt-1 text-sm text-muted-foreground">Free forever plan · no card required.</p>
          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Ada Lovelace" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@studio.com" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="At least 8 characters" />
            </div>
            <Button className="w-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-3)] text-white shadow-glow">Create account</Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have one? <Link to="/login" className="text-[var(--neon-2)] hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
