import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Clock, Droplets } from "lucide-react";
import { motion } from "framer-motion";

interface Opportunity {
  id: string;
  market: string;
  yesPrice: number;
  noPrice: number;
  totalCost: number;
  profitPct: number;
  expectedProfit: number;
  riskScore: number;
  liquidity: string;
  timeLeft: string;
  priority: "high" | "medium" | "low";
}

const mockOpportunities: Opportunity[] = [
  {
    id: "1",
    market: "Will BTC reach $120k by June 2026?",
    yesPrice: 0.42,
    noPrice: 0.54,
    totalCost: 0.96,
    profitPct: 4.17,
    expectedProfit: 41.7,
    riskScore: 22,
    liquidity: "$84.2K",
    timeLeft: "4h 23m",
    priority: "high",
  },
  {
    id: "2",
    market: "Fed rate cut in March 2026?",
    yesPrice: 0.38,
    noPrice: 0.59,
    totalCost: 0.97,
    profitPct: 3.09,
    expectedProfit: 30.9,
    riskScore: 35,
    liquidity: "$42.8K",
    timeLeft: "12h 05m",
    priority: "medium",
  },
  {
    id: "3",
    market: "ETH flips BTC market cap by 2027?",
    yesPrice: 0.12,
    noPrice: 0.85,
    totalCost: 0.97,
    profitPct: 3.09,
    expectedProfit: 30.9,
    riskScore: 48,
    liquidity: "$21.3K",
    timeLeft: "2d 8h",
    priority: "low",
  },
  {
    id: "4",
    market: "US GDP growth > 3% in Q1 2026?",
    yesPrice: 0.55,
    noPrice: 0.42,
    totalCost: 0.97,
    profitPct: 3.09,
    expectedProfit: 30.9,
    riskScore: 18,
    liquidity: "$112K",
    timeLeft: "1h 45m",
    priority: "high",
  },
  {
    id: "5",
    market: "Solana TVL exceeds $30B?",
    yesPrice: 0.33,
    noPrice: 0.63,
    totalCost: 0.96,
    profitPct: 4.17,
    expectedProfit: 41.7,
    riskScore: 30,
    liquidity: "$67.5K",
    timeLeft: "6h 12m",
    priority: "high",
  },
];

const priorityStyles = {
  high: "bg-profit/10 text-profit border-profit/20",
  medium: "bg-warning/10 text-warning border-warning/20",
  low: "bg-muted text-muted-foreground border-border",
};

const OpportunitiesTable = () => {
  return (
    <section id="markets" className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-1">Live Opportunities</h2>
            <p className="text-muted-foreground text-sm">Real-time arbitrage detection across prediction markets</p>
          </div>
          <Badge variant="outline" className="border-accent/30 bg-accent/5 text-accent font-mono text-xs">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
            {mockOpportunities.length} Active
          </Badge>
        </div>

        <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
          {/* Header */}
          <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 bg-muted/50 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            <div className="col-span-4">Market</div>
            <div className="col-span-1 text-center">YES</div>
            <div className="col-span-1 text-center">NO</div>
            <div className="col-span-1 text-center">Profit</div>
            <div className="col-span-1 text-center">Risk</div>
            <div className="col-span-1 text-center">Liquidity</div>
            <div className="col-span-1 text-center">Time</div>
            <div className="col-span-2 text-right">Action</div>
          </div>

          {/* Rows */}
          {mockOpportunities.map((opp, i) => (
            <motion.div
              key={opp.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center px-6 py-5 border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
            >
              <div className="col-span-4 flex items-center gap-3">
                <Badge variant="outline" className={`text-[10px] shrink-0 ${priorityStyles[opp.priority]}`}>
                  {opp.priority}
                </Badge>
                <span className="text-sm font-medium text-foreground leading-snug">{opp.market}</span>
              </div>
              <div className="col-span-1 text-center font-mono text-sm text-foreground">${opp.yesPrice.toFixed(2)}</div>
              <div className="col-span-1 text-center font-mono text-sm text-foreground">${opp.noPrice.toFixed(2)}</div>
              <div className="col-span-1 text-center">
                <span className="font-mono text-sm font-semibold text-profit">+{opp.profitPct.toFixed(2)}%</span>
              </div>
              <div className="col-span-1 text-center">
                <span className={`font-mono text-sm ${opp.riskScore <= 25 ? "text-profit" : opp.riskScore <= 40 ? "text-warning" : "text-loss"}`}>
                  {opp.riskScore}
                </span>
              </div>
              <div className="col-span-1 text-center flex items-center justify-center gap-1 text-muted-foreground">
                <Droplets className="h-3.5 w-3.5" />
                <span className="font-mono text-xs">{opp.liquidity}</span>
              </div>
              <div className="col-span-1 text-center flex items-center justify-center gap-1 text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                <span className="font-mono text-xs">{opp.timeLeft}</span>
              </div>
              <div className="col-span-2 flex justify-end">
                <Button size="sm" className="bg-gradient-accent text-accent-foreground shadow-glow-accent hover:opacity-90 text-xs h-8 px-4">
                  Execute
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesTable;
