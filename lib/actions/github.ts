"use server";

import { unstable_cache } from "next/cache";

const username = "AshrafElshaer";

export type Contribution = {
  count: number;
  date: string;
  level: number;
};

const fetchContributions = async (): Promise<Contribution[]> => {
  const url = new URL(
    `/v4/${username}`,
    "https://github-contributions-api.jogruber.de",
  );

  const response = await fetch(url);
  const data = (await response.json()) as {
    contributions: Contribution[];
    total: Record<number, number>;
  };

  return data.contributions;
};

export const getContributions = unstable_cache(
  fetchContributions,
  ["github-contributions"],
  {
    revalidate: 3600, // Cache for 1 hour
  },
);
