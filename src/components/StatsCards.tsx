import { DollarSign, TrendingUp, Target, Percent } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: DollarSign,
    label: "Total Profit",
    value: "$46,280",
    change: "+12.4%",
    positive: true,
  },
  {
    icon: TrendingUp,
    label: "Active Positions",
    value: "18",
    change: "+3 today",
    positive: true,
  },
  {
    icon: Target,
    label: "Win Rate",
    value: "94.6%",
    change: "+1.2%",
    positive: true,
  },
  {
    icon: Percent,
    label: "Avg Profit",
    value: "3.8%",
    change: "-0.3%",
    positive: false,
  },
];

const StatsCards = () => {
  return (
    <section id="dashboard" className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <stat.icon className="h-5 w-5 text-accent" />
                </div>
                <span
                  className={`font-mono text-xs font-semibold px-2 py-1 rounded-md ${
                    stat.positive
                      ? "bg-profit/10 text-profit"
                      : "bg-loss/10 text-loss"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <p className="font-mono text-3xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCards;
