import logoAsset from "@/assets/snapcut-logo.png.asset.json";

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="SnapCut AI"
      className={className + " select-none"}
      draggable={false}
    />
  );
}

export function LogoLockup({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const s = size === "lg" ? "h-12 w-12" : size === "sm" ? "h-7 w-7" : "h-9 w-9";
  const t = size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-lg";
  return (
    <div className="flex items-center gap-2.5">
      <Logo className={s} />
      <span className={`${t} font-semibold tracking-tight`}>
        Snap<span className="text-gradient-brand italic">Cut</span>
      </span>
    </div>
  );
}
