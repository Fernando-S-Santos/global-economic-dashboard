"use client";

interface SummaryProps {
  gdp: number;
  unemployment: number;
  inflation: number;
}

export default function GlobalSummary({
  gdp,
  unemployment,
  inflation,
}: SummaryProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
        <h3 className="text-slate-400 text-sm">Average GDP</h3>
        <p className="text-2xl font-bold text-blue-400 mt-2">
          {gdp.toFixed(0)} B USD
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
        <h3 className="text-slate-400 text-sm">Average Unemployment</h3>
        <p className="text-2xl font-bold text-yellow-400 mt-2">
          {unemployment.toFixed(1)}%
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
        <h3 className="text-slate-400 text-sm">Average Inflation</h3>
        <p className="text-2xl font-bold text-red-400 mt-2">
          {inflation.toFixed(1)}%
        </p>
      </div>
    </div>
  );
}