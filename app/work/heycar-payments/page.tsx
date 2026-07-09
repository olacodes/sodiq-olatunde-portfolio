import type { Metadata } from "next";
import {
  CaseStudyShell,
  CaseSection,
  Decisions,
} from "@/components/CaseStudyShell";

export const metadata: Metadata = {
  title: "Heycar Payments — Case Study",
  description:
    "How I unified Heycar's payment and order systems across the UK, France, and Germany and refactored them into a Hexagonal architecture — cutting operational cost by 50% and enabling any payment gateway.",
};

// Ports-and-adapters view of the refactor
const adapters = [
  { name: "Stripe adapter", desc: "Primary card processing" },
  { name: "Gateway adapters", desc: "Add a provider without touching the core" },
  { name: "Country rules", desc: "UK · France · Germany config, one codebase" },
  { name: "Order service", desc: "Payments tied to a single order flow" },
];

const decisions = [
  {
    title: "Hexagonal architecture (ports & adapters)",
    body: "The payment domain — the actual business rules — was refactored to know nothing about any specific gateway. Providers plug in behind ports as adapters, so adding or swapping a gateway (Stripe and others) is a new adapter, not a rewrite. That's what let customers choose their preferred payment method without destabilizing the core.",
  },
  {
    title: "One platform, configured per market — not three forks",
    body: "The UK, France, and Germany previously ran separate payment and order services: triple the code, triple the maintenance, inconsistent behaviour. I unified them into a single platform driven by per-country configuration, which is where the 50% operational-cost reduction came from.",
  },
  {
    title: "A gateway-agnostic core is a testable core",
    body: "Because the domain logic is isolated from external gateways, it can be unit-tested without hitting real payment providers — making the most business-critical code the most reliable, and safe to change.",
  },
];

export default function HeycarPaymentsCaseStudy() {
  return (
    <CaseStudyShell
      context="Heycar · Contract · 2022—2024"
      title="Unifying Payments Across Three Markets"
      lead="Heycar is an e-commerce marketplace for cars operating across the UK, France, and Germany. I unified its fragmented, country-specific payment and order systems into one platform — and refactored it so any payment gateway can plug in."
      stack={["Python", "Hexagonal Architecture", "Stripe", "PostgreSQL", "Kubernetes"]}
      metrics={[
        { value: "50%", label: "operational cost cut" },
        { value: "3 → 1", label: "country systems unified" },
        { value: "Stripe+", label: "pluggable gateways" },
      ]}
    >
      <CaseSection index="01" title="The problem">
        <p>
          Heycar sells cars online across three European markets — the UK,
          France, and Germany. But each market ran its own payment and order
          service: the same logic implemented three times, maintained three
          times, and drifting apart over time.
        </p>
        <p>
          Every new payment method or bug fix meant doing the work in triplicate,
          the customer experience differed by country, and the operational cost
          of keeping three parallel systems alive was high.
        </p>
      </CaseSection>

      <CaseSection index="02" title="What I built">
        <p>
          I orchestrated the integration of Heycar&apos;s payment and order
          service across all three markets into a{" "}
          <span className="text-ink">single unified platform</span>, then
          refactored the payment service into a{" "}
          <span className="text-ink">Hexagonal (ports &amp; adapters)</span>{" "}
          architecture.
        </p>

        <div className="mt-8">
          <div className="node-frame panel rounded-lg p-6 text-center">
            <div className="font-display text-xl font-semibold">
              Payment Domain Core
            </div>
            <div className="mt-1 font-mono text-xs text-faint">
              business rules · gateway-agnostic · fully testable
            </div>
          </div>
          <p className="my-4 text-center font-mono text-xs text-ochre/80">
            ↕ ports &amp; adapters ↕
          </p>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {adapters.map((a) => (
              <div key={a.name} className="rounded-md border border-line bg-surface/40 p-3.5">
                <div className="font-display text-sm font-semibold">
                  {a.name}
                </div>
                <div className="mt-1 text-xs leading-snug text-muted">
                  {a.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CaseSection>

      <CaseSection index="03" title="Key decisions">
        <Decisions items={decisions} />
      </CaseSection>

      <CaseSection index="04" title="Outcome">
        <p>
          Consolidating three country-specific systems into one unified,
          gateway-agnostic platform cut operational costs by{" "}
          <span className="text-ink">50%</span>, let customers pick their
          preferred payment method, and left the payment service far more
          scalable and maintainable — new markets and providers now extend the
          system instead of forking it.
        </p>
      </CaseSection>
    </CaseStudyShell>
  );
}
