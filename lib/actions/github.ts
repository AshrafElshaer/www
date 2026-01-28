"use server";



const username = "AshrafElshaer";

export type Contribution = {
  count: number;
  date: string;
  level: number;
};

export const getContributions = async (): Promise<Contribution[]> => {
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


