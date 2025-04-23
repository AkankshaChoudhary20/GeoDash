export interface Country {
  name: { common: string };
  capital?: string[];
  region: string;
  population: number;
  timezones?: string[];
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
  flags: { png: string; svg: string };
}
