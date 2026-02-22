"use client";

interface RankingProps {
  data: {
    country: string;
    gdp: number;
  }[];
}

export default function RankingTable({ data }: RankingProps) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mt-10">
      <h2 className="text-lg font-semibold mb-4 text-blue-400">
        GDP Ranking
      </h2>

      <ul className="space-y-3">
        {data.map((item, index) => (
          <li
            key={item.country}
            className="flex justify-between border-b border-slate-800 pb-2"
          >
            <span>
              {index + 1}. {item.country}
            </span>
            <span className="text-blue-400 font-semibold">
              {item.gdp}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}