"use client";

interface TopProps {
  country: string;
  gdp: number;
}

export default function TopCountryHighlight({ country, gdp }: TopProps) {
  return (
    <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-400/10 border border-blue-500/30">
      <h2 className="text-lg font-semibold text-blue-400 mb-2">
        🏆 Top GDP Country
      </h2>
      <p className="text-2xl font-bold text-white">
        {country}
      </p>
      <p className="text-slate-300">
        GDP: {gdp} Billion USD
      </p>
    </div>
  );
}