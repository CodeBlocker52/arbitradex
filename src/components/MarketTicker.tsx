import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const ticker = [
  { market: "BTC $120k Jun '26", profit: "+4.17%", type: "Direct" },
  { market: "Fed Rate Cut Mar", profit: "+3.09%", type: "Direct" },
  { market: "ETH Flip BTC", profit: "+3.09%", type: "Cross" },
  { market: "SOL TVL $30B", profit: "+4.17%", type: "Direct" },
  { market: "US GDP >3% Q1", profit: "+3.09%", type: "Temporal" },
  { market: "AAPL $250 Q2", profit: "+2.84%", type: "Liquidity" },
  { market: "AI regulation US", profit: "+5.21%", type: "Direct" },
  { market: "DeFi TVL $200B", profit: "+3.45%", type: "Cross" },
];

const MarketTicker = () => {
  return (
    <div className="border-y border-border bg-muted/40 py-3 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...ticker, ...ticker].map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-6 shrink-0">
            <span className="text-xs font-medium text-foreground">{item.market}</span>
            <span className="font-mono text-xs font-semibold text-profit">{item.profit}</span>
            <Badge variant="outline" className="text-[10px] py-0 h-5 border-border text-muted-foreground">
              {item.type}
            </Badge>
            <span className="text-border">|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketTicker;
