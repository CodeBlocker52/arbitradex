import { Database, Cpu, Zap, BarChart3, Shield, Layers } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Database,
    title: "Data Ingestion",
    description: "Real-time price feeds from Polymarket via WebSocket & REST API. Normalized and cached for sub-second access.",
    tags: ["WebSocket", "REST API", "CLOB Parser"],
  },
  {
    icon: Cpu,
    title: "Detection Engine",
    description: "Multi-strategy arbitrage scanning: direct, cross-market, temporal, and liquidity-based opportunities.",
    tags: ["AI Scoring", "Risk Analysis", "Gas Optimizer"],
  },
  {
    icon: Zap,
    title: "Atomic Execution",
    description: "Smart contract-based trades with MEV protection, slippage guards, and batch execution for gas efficiency.",
    tags: ["Solidity 0.8.24", "Flashbots", "Batch Tx"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Monitoring",
    description: "Real-time P&L tracking, strategy performance dashboards, and historical backtesting tools.",
    tags: ["Live Charts", "Heatmaps", "Backtesting"],
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Position limits, stop-loss mechanisms, multi-sig treasury, and capital preservation protocols.",
    tags: ["Multi-sig", "Pausable", "Reentrancy Guard"],
  },
  {
    icon: Layers,
    title: "Auto-Compounding",
    description: "Profits are automatically reinvested based on configurable thresholds and risk-adjusted sizing.",
    tags: ["Dynamic Sizing", "Compounding", "Capital Alloc"],
  },
];

const HowItWorks = () => {
  return (
    <section id="architecture" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">How It Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            End-to-end pipeline from market data ingestion to automated profit capture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-hero mb-5">
                <step.icon className="h-5 w-5 text-accent-foreground" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {step.tags.map((tag) => (
                  <span key={tag} className="inline-block rounded-md bg-muted px-2.5 py-1 text-[11px] font-mono text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
