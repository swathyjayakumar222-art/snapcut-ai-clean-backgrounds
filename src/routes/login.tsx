import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogoLockup } from "@/components/Logo";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — SnapCut AI" }] }),
  component: Login,
});

function Login() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto flex max-w-md flex-col px-6 py-16">
        <div className="mb-8 flex justify-center"><LogoLockup size="lg" /></div>
        <div className="glass-card rounded-2xl p-8 shadow-glow">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="mt-1 text-sm text-muted-foreground">Sign in to continue to SnapCut.</p>
          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@studio.com" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full bg-gradient-to-r from-[var(--neon)] to-[var(--neon-3)] text-white shadow-glow">Sign in</Button>
          </form>
          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-white/10" /> OR <div className="h-px flex-1 bg-white/10" />
          </div>
          <Button variant="outline" className="w-full border-white/15 bg-white/5">Continue with Google</Button>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            No account? <Link to="/register" className="text-[var(--neon-2)] hover:underline">Create one</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
