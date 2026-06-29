import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const TopicChart = ({ topics = [] }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">Top Topics</h2>

      <div className="h-[450px]">
        <ResponsiveContainer>
          <BarChart data={topics.slice(0, 10)} layout="vertical">
            <XAxis type="number" />

            <YAxis dataKey="tagName" type="category" width={110} />

            <Tooltip />

            <Bar dataKey="problemsSolved" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopicChart;
