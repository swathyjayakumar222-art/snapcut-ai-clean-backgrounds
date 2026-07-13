import { Link } from "@tanstack/react-router";
import { LogoLockup } from "@/components/Logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center">
          <LogoLockup />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/features" className="transition hover:text-foreground">Features</Link>
          <Link to="/pricing" className="transition hover:text-foreground">Pricing</Link>
          <Link to="/api-docs" className="transition hover:text-foreground">API</Link>
          <Link to="/app" className="transition hover:text-foreground">Try it</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/login" className="hidden sm:inline">
            <Button variant="ghost" size="sm">Sign in</Button>
          </Link>
          <Link to="/app">
            <Button
              size="sm"
              className="bg-gradient-to-r from-[var(--neon)] to-[var(--neon-3)] text-white shadow-glow hover:brightness-110"
            >
              Launch app
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
