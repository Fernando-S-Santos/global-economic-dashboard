export interface EconomicData {
  country: string;
  year: number;
  gdp: number; // bilhões USD
  unemployment: number; // %
  inflation: number; // %
}

export const globalData: EconomicData[] = [
  { country: "USA", year: 2020, gdp: 20937, unemployment: 8.1, inflation: 1.2 },
  { country: "USA", year: 2021, gdp: 23150, unemployment: 5.4, inflation: 4.7 },
  { country: "USA", year: 2022, gdp: 25462, unemployment: 3.6, inflation: 8.0 },
  { country: "USA", year: 2023, gdp: 26854, unemployment: 3.7, inflation: 4.1 },

  { country: "Germany", year: 2020, gdp: 3846, unemployment: 4.3, inflation: 0.5 },
  { country: "Germany", year: 2021, gdp: 4223, unemployment: 3.6, inflation: 3.1 },
  { country: "Germany", year: 2022, gdp: 4080, unemployment: 3.1, inflation: 8.7 },
  { country: "Germany", year: 2023, gdp: 4290, unemployment: 3.0, inflation: 6.0 },

  { country: "Brazil", year: 2020, gdp: 1445, unemployment: 13.8, inflation: 3.2 },
  { country: "Brazil", year: 2021, gdp: 1608, unemployment: 13.2, inflation: 8.3 },
  { country: "Brazil", year: 2022, gdp: 1920, unemployment: 9.3, inflation: 9.3 },
  { country: "Brazil", year: 2023, gdp: 2130, unemployment: 8.0, inflation: 4.6 },

  { country: "Japan", year: 2020, gdp: 5065, unemployment: 2.8, inflation: 0.0 },
  { country: "Japan", year: 2021, gdp: 4937, unemployment: 2.8, inflation: -0.2 },
  { country: "Japan", year: 2022, gdp: 4230, unemployment: 2.6, inflation: 2.5 },
  { country: "Japan", year: 2023, gdp: 4380, unemployment: 2.5, inflation: 3.3 },
];

