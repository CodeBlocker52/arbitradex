import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { motion } from "framer-motion";

const profitData = [
  { day: "Mon", profit: 120, trades: 8 },
  { day: "Tue", profit: 280, trades: 14 },
  { day: "Wed", profit: 190, trades: 11 },
  { day: "Thu", profit: 420, trades: 22 },
  { day: "Fri", profit: 380, trades: 19 },
  { day: "Sat", profit: 510, trades: 26 },
  { day: "Sun", profit: 340, trades: 17 },
];

const strategyData = [
  { name: "Direct", value: 62 },
  { name: "Cross-Mkt", value: 21 },
  { name: "Temporal", value: 12 },
  { name: "Liquidity", value: 5 },
];

const AnalyticsCharts = () => {
  return (
    <section id="analytics" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-1">Performance Analytics</h2>
        <p className="text-muted-foreground text-sm mb-8">Track profitability and strategy performance</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Profit chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 rounded-xl border border-border bg-card p-6 shadow-card"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Weekly Profit</p>
                <p className="font-mono text-2xl font-bold text-foreground">$2,240</p>
              </div>
              <span className="font-mono text-xs font-semibold px-2 py-1 rounded-md bg-profit/10 text-profit">
                +18.3% vs last week
              </span>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={profitData}>
                <defs>
                  <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(152, 60%, 48%)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(152, 60%, 48%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 90%)" />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: 'hsl(215, 14%, 46%)' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: 'hsl(215, 14%, 46%)' }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
                <Tooltip
                  contentStyle={{
                    background: 'hsl(0, 0%, 100%)',
                    border: '1px solid hsl(214, 20%, 90%)',
                    borderRadius: '8px',
                    fontFamily: 'JetBrains Mono',
                    fontSize: '12px',
                  }}
                  formatter={(value: number) => [`$${value}`, 'Profit']}
                />
                <Area type="monotone" dataKey="profit" stroke="hsl(152, 60%, 48%)" strokeWidth={2.5} fill="url(#profitGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Strategy breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-border bg-card p-6 shadow-card"
          >
            <p className="text-sm text-muted-foreground mb-1">Strategy Mix</p>
            <p className="font-mono text-2xl font-bold text-foreground mb-6">117 Trades</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={strategyData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(214, 20%, 90%)" />
                <XAxis type="number" tick={{ fontSize: 11, fill: 'hsl(215, 14%, 46%)' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: 'hsl(215, 14%, 46%)' }} axisLine={false} tickLine={false} width={70} />
                <Tooltip
                  contentStyle={{
                    background: 'hsl(0, 0%, 100%)',
                    border: '1px solid hsl(214, 20%, 90%)',
                    borderRadius: '8px',
                    fontFamily: 'JetBrains Mono',
                    fontSize: '12px',
                  }}
                  formatter={(value: number) => [`${value}%`, 'Share']}
                />
                <Bar dataKey="value" fill="hsl(152, 60%, 48%)" radius={[0, 6, 6, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-6 space-y-3">
              {strategyData.map((s) => (
                <div key={s.name} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{s.name}</span>
                  <span className="font-mono font-semibold text-foreground">{s.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsCharts;
