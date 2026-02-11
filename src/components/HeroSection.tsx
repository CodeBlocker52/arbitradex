import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Activity, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge variant="outline" className="mb-6 border-accent/30 bg-accent/5 text-accent font-mono text-xs px-4 py-1.5">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
            LIVE — Scanning 500+ Markets
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-foreground">Capture </span>
            <span className="text-gradient-hero">Risk-Free</span>
            <br />
            <span className="text-foreground">Arbitrage Profits</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Automated detection & execution engine for prediction market inefficiencies. 
            ArbiTradeX scans thousands of markets in real-time to find guaranteed profit opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-gradient-accent text-accent-foreground shadow-glow-accent hover:opacity-90 px-8 text-base h-12">
              Launch App
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 text-base h-12">
              View Documentation
            </Button>
          </div>
        </motion.div>

        {/* Metric pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { icon: TrendingUp, label: "Trading Volume", value: "$2.4B+", sub: "in 2024" },
            { icon: Activity, label: "Avg Arb Window", value: "3-15s", sub: "reaction time" },
            { icon: Shield, label: "Profit Margin", value: "2-8%", sub: "per trade" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-card"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <stat.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-mono text-xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label} · {stat.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
