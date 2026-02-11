import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
                <Zap className="h-4 w-4 text-accent-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground font-display">ArbiTradeX</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Automated arbitrage detection & execution for prediction markets.
            </p>
          </div>

          {[
            {
              title: "Protocol",
              links: ["Dashboard", "Markets", "Analytics", "Documentation"],
            },
            {
              title: "Developers",
              links: ["Smart Contracts", "SDK", "API Reference", "GitHub"],
            },
            {
              title: "Community",
              links: ["Discord", "Twitter", "Blog", "Governance"],
            },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-foreground mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 ArbiTradeX Protocol. MIT License. For educational purposes only.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Built for the Web3 Hackathon Community 🚀
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
