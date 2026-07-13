import { Link } from "@tanstack/react-router";
import { LogoLockup } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-background/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <LogoLockup />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            AI-powered background removal. Studio-grade cutouts in under 5 seconds.
          </p>
        </div>
        <FooterCol title="Product" links={[["Features","/features"],["Pricing","/pricing"],["API","/api-docs"],["Launch app","/app"]]} />
        <FooterCol title="Company" links={[["About","/about"],["Contact","/contact"],["Blog","/blog"]]} />
        <FooterCol title="Legal" links={[["Privacy","/privacy"],["Terms","/terms"]]} />
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SnapCut AI. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold text-foreground">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link to={href} className="transition hover:text-foreground">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
