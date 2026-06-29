import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#06b6d4", "#3b82f6", "#8b5cf6", "#22c55e", "#f97316"];

const LanguageChart = ({ languages = [] }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">Languages Used</h2>

      <div className="h-80">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={languages}
              dataKey="problemsSolved"
              nameKey="languageName"
              outerRadius={110}
            >
              {languages.map((entry, index) => (
                <Cell
                  key={entry.languageName}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LanguageChart;
