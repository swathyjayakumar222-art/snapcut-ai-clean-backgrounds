import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useRef, useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Upload, ImageIcon, Download, RefreshCw, Sparkles, X } from "lucide-react";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "SnapCut AI — Workspace" },
      { name: "description", content: "Upload an image and remove its background instantly." },
    ],
  }),
  component: Workspace,
});

const MAX_MB = 10;
const ACCEPT = ["image/jpeg", "image/png", "image/webp"];

function Workspace() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((f: File) => {
    if (!ACCEPT.includes(f.type)) return toast.error("Unsupported format. Use JPG, PNG, or WEBP.");
    if (f.size > MAX_MB * 1024 * 1024) return toast.error(`Max file size is ${MAX_MB} MB.`);
    setFile(f);
    setPreviewUrl(URL.createObjectURL(f));
    setStatus("processing");
    setProgress(0);
    // Simulated processing progress (real pipeline hits n8n webhook → AI API)
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(95, (elapsed / 4200) * 100);
      setProgress(pct);
      if (elapsed >= 4200) {
        clearInterval(interval);
        setProgress(100);
        setStatus("done");
        toast.success("Background removed", { description: "Your cutout is ready to download." });
      }
    }, 120);
  }, []);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  const reset = () => {
    setFile(null);
    setPreviewUrl(null);
    setStatus("idle");
    setProgress(0);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Toaster />
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-[var(--neon-2)]">Workspace</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight md:text-4xl">
              Remove a background
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              JPG · PNG · WEBP · up to {MAX_MB} MB · auto-deleted after 24h
            </p>
          </div>
          <Link to="/dashboard">
            <Button variant="outline" className="border-white/15 bg-white/5">Open dashboard</Button>
          </Link>
        </div>

        {!file ? (
          <label
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
            className={`glass-card relative flex min-h-[420px] cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed p-10 text-center transition ${
              dragOver ? "border-[var(--neon)] shadow-glow-lg" : "border-white/15 hover:border-[var(--neon)]/60"
            }`}
          >
            <input
              ref={inputRef}
              type="file"
              accept={ACCEPT.join(",")}
              className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
            />
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--neon)]/25 to-[var(--neon-3)]/25 ring-1 ring-white/10">
              <Upload className="h-7 w-7 text-[var(--neon-2)]" />
            </div>
            <h2 className="text-2xl font-semibold">Drop your image here</h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Or click to browse. We'll cut out the subject in under 5 seconds.
            </p>
            <Button className="mt-6 bg-gradient-to-r from-[var(--neon)] to-[var(--neon-3)] text-white shadow-glow">
              <ImageIcon className="mr-1.5 h-4 w-4" /> Choose image
            </Button>
          </label>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            <PreviewCard label="Original" url={previewUrl!} />
            <div className="glass-card relative overflow-hidden rounded-3xl">
              <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[var(--neon-2)]">
                  <Sparkles className="h-3.5 w-3.5" /> SnapCut result
                </span>
                <button onClick={reset} className="rounded-md p-1 text-muted-foreground transition hover:bg-white/5 hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="checker-bg relative aspect-square">
                {status === "processing" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/60 backdrop-blur-sm">
                    <div className="text-sm font-medium">Cutting out your subject…</div>
                    <div className="w-2/3">
                      <Progress value={progress} className="h-1.5" />
                    </div>
                    <div className="text-xs text-muted-foreground">{Math.round(progress)}%</div>
                  </div>
                )}
                {status === "done" && previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Cutout"
                    className="h-full w-full object-cover"
                    style={{
                      WebkitMaskImage: "radial-gradient(ellipse 46% 62% at 50% 45%, black 62%, transparent 80%)",
                      maskImage: "radial-gradient(ellipse 46% 62% at 50% 45%, black 62%, transparent 80%)",
                    }}
                  />
                )}
              </div>
              <div className="flex gap-2 border-t border-white/5 p-4">
                <Button
                  disabled={status !== "done"}
                  className="flex-1 bg-gradient-to-r from-[var(--neon)] to-[var(--neon-3)] text-white shadow-glow disabled:opacity-50"
                  onClick={() => toast.info("Wire this to your Cloudinary result URL")}
                >
                  <Download className="mr-1.5 h-4 w-4" /> Download PNG
                </Button>
                <Button variant="outline" className="border-white/15 bg-white/5" onClick={reset}>
                  <RefreshCw className="mr-1.5 h-4 w-4" /> New
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 grid gap-3 text-sm text-muted-foreground md:grid-cols-3">
          <InfoRow label="Daily quota" value="3 / 5 images" />
          <InfoRow label="Plan" value="Free" />
          <InfoRow label="Storage" value="Auto-deleted in 24h" />
        </div>
      </div>
    </div>
  );
}

function PreviewCard({ label, url }: { label: string; url: string }) {
  return (
    <div className="glass-card overflow-hidden rounded-3xl">
      <div className="border-b border-white/5 px-4 py-3">
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</span>
      </div>
      <div className="aspect-square">
        <img src={url} alt={label} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-card flex items-center justify-between rounded-xl px-4 py-3">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}
