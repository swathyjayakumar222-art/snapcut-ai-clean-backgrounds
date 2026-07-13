import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/api-docs")({
  head: () => ({
    meta: [
      { title: "API — SnapCut AI" },
      { name: "description", content: "REST API to remove backgrounds programmatically. Authentication, endpoints, and examples." },
    ],
  }),
  component: ApiDocs,
});

function ApiDocs() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-medium text-[var(--neon-2)]">Developers</p>
        <h1 className="mt-2 text-5xl font-bold tracking-tight">SnapCut API</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          One endpoint. Transparent PNG in the response. Rotate keys, throttle bursts, track usage in the dashboard.
        </p>

        <Section title="Authentication">
          <p>All requests require a bearer token. Generate keys in your dashboard.</p>
          <Code>Authorization: Bearer SNAPCUT_LIVE_...</Code>
        </Section>

        <Section title="POST /v1/remove">
          <p>Multipart upload. Returns a transparent PNG stream.</p>
          <Code>{`curl https://api.snapcut.ai/v1/remove \\
  -H "Authorization: Bearer $SNAPCUT_KEY" \\
  -F image=@portrait.jpg \\
  -o cutout.png`}</Code>
        </Section>

        <Section title="Response">
          <Code>{`HTTP/1.1 200 OK
Content-Type: image/png
X-Processing-Ms: 4210
X-Credits-Remaining: 486`}</Code>
        </Section>

        <Section title="Rate limits">
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Free: 100 requests / month</li>
            <li>Pro: 60 requests / minute</li>
            <li>Enterprise: custom throughput and SLA</li>
          </ul>
        </Section>

        <Section title="Errors">
          <Code>{`{ "error": "invalid_image", "message": "Only JPG, PNG, and WEBP under 10MB are accepted." }`}</Code>
        </Section>
      </section>
      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 space-y-3 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="glass-card overflow-x-auto rounded-xl bg-black/40 p-4 font-mono text-xs text-foreground/90">
{children}
    </pre>
  );
}
