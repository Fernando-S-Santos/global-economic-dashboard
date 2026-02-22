"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface ChartProps {
  data: {
    country: string;
    gdp: number;
  }[];
}

export default function GDPChart({ data }: ChartProps) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mt-10">
      <h2 className="text-lg font-semibold mb-4 text-blue-400">
        GDP Comparison
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="country" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            cursor={false}
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#94a3b8" }}
          />
          <Bar
            dataKey="gdp"
            fill="#3b82f6"
            radius={[6, 6, 0, 0]}
            activeBar={{ fill: "#2563eb" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}