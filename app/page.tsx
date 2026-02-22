"use client";

import GDPChart from "@/components/GDPChart";
import { useState } from "react";
import { globalData } from "@/data/globalData";
import RankingTable from "@/components/RankingTable";
import GlobalSummary from "@/components/GlobalSummary";
import TopCountryHighlight from "@/components/TopCountryHighlight";

export default function Home() {
  const [selectedYear, setSelectedYear] = useState(2023);

  const [selectedIndicator, setSelectedIndicator] = useState("gdp");

  const years = Array.from(new Set(globalData.map(item => item.year)));

  const filteredData = globalData.filter(
    item => item.year === selectedYear
  );

  const rankedData = [...filteredData].sort((a, b) => {
  const valueA = Number(a[selectedIndicator as keyof typeof a]);
  const valueB = Number(b[selectedIndicator as keyof typeof b]);

    return valueB - valueA;
  });

  const topCountry = rankedData[0];

  const averageValue =
    filteredData.reduce((acc, item) => {
      return acc + Number(item[selectedIndicator as keyof typeof item]);
    }, 0) / filteredData.length;

  const averageUnemployment =
    filteredData.reduce((acc, item) => acc + item.unemployment, 0) /
    filteredData.length;

  const averageInflation =
    filteredData.reduce((acc, item) => acc + item.inflation, 0) /
    filteredData.length;


  return (
    <main className="min-h-screen bg-slate-950 text-white p-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">
        🌍 Global Economic Indicators
      </h1>

      <p className="text-slate-400 mb-8">
        Comparative analysis of GDP, unemployment and inflation rates.
      </p>

      {/* Filtro Ano */}
      <div className="mb-8">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="bg-slate-900 border border-slate-700 p-2 rounded-md"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      {/* Filtro Indicador */}
      <div className="mb-8">
        <select
          value={selectedIndicator}
          onChange={(e) => setSelectedIndicator(e.target.value)}
          className="bg-slate-900 border border-slate-700 p-2 rounded-md"
        >
          <option value="gdp">GDP</option>
          <option value="unemployment">Unemployment</option>
          <option value="inflation">Inflation</option>
        </select>
      </div>

      {/* Tabela Simples */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <h2 className="text-lg font-semibold mb-4 text-blue-400">
          Economic Data ({selectedYear})
        </h2>

        <table className="w-full text-left">
          <thead className="text-slate-400 border-b border-slate-800">
            <tr>
              <th className="py-2">Country</th>
              <th>GDP (Billion USD)</th>
              <th>Unemployment (%)</th>
              <th>Inflation (%)</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.country} className="border-b border-slate-800">
                <td className="py-2">{item.country}</td>
                <td>{item.gdp}</td>
                <td>{item.unemployment}</td>
                <td>{item.inflation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <GDPChart data={filteredData} />
      <RankingTable data={rankedData} />
      <GlobalSummary
        gdp={averageValue}
        unemployment={averageUnemployment}
        inflation={averageInflation}
      />
      <TopCountryHighlight
        country={topCountry.country}
        gdp={topCountry.gdp}
      />
      <p className="text-slate-300 mt-2">
        Média de {selectedIndicator.toUpperCase()}:{" "}
        {averageValue.toLocaleString()}{" "}
        {selectedIndicator === "gdp" && "Billion USD"}
        {selectedIndicator === "unemployment" && "%"}
        {selectedIndicator === "inflation" && "%"}
      </p>
    </main>
  );
}

