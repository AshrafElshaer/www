"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/contribution-graph";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { getYear } from "date-fns";
import { motion } from "motion/react";
import { getContributions, type Contribution } from "@/lib/actions/github";

const currentYear = new Date().getFullYear();
const selectableYears = () => {
  const startYear = 2022;
  const years = [];
  for (let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }
  return years;
};
export const Contributions = () => {
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [availableYears] = useState<number[]>(selectableYears());
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<{
    contributions: Contribution[];
  }>({ contributions: [] });

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const contributions = await getContributions();
      setData({ contributions });
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const { contributions, total } = useMemo(() => {
    const contributions = data.contributions.filter((contribution) => {
      return getYear(new Date(contribution.date)) === selectedYear;
    });
    const total = contributions.reduce(
      (acc, contribution) => acc + contribution.count,
      0,
    );
    return { contributions, total };
  }, [data.contributions, selectedYear]);

  return (
    <div className="space-y-4 p-4">
      <motion.h2
        initial={{ opacity: 0, y: 4, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="text-lg font-medium font-chillax"
      >
        Contributions
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 4, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="flex items-center justify-end gap-2"
      >
        {availableYears.map((year) => (
          <Button
            key={year}
            variant={selectedYear === year ? "default" : "outline"}
            onClick={() => setSelectedYear(year)}
            size="sm"
          >
            {year}
          </Button>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 4, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        {isLoading ? (
          <div className="space-y-3">
            <div className="h-[120px] w-full animate-pulse rounded-md bg-muted" />
            <div className="flex items-center justify-between">
              <div className="h-5 w-32 animate-pulse rounded bg-muted" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-3 w-3 animate-pulse rounded-sm bg-muted"
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <ContributionGraph data={contributions}>
            <ContributionGraphCalendar>
              {({ activity, dayIndex, weekIndex }) => (
                <ContributionGraphBlock
                  activity={activity}
                  className={cn(
                    'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
                    'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
                    'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
                    'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
                    'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]',
                  )}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                />
              )}
            </ContributionGraphCalendar>
            <ContributionGraphFooter>
              <ContributionGraphTotalCount>
                {() => (
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground text-sm">
                      Year {selectedYear}:
                    </span>
                    <Badge variant="outline">
                      {total.toLocaleString()} contributions
                    </Badge>
                  </div>
                )}
              </ContributionGraphTotalCount>
              <ContributionGraphLegend>
                {({ level }) => (
                  <div
                    className="group relative flex h-3 w-3 items-center justify-center"
                    data-level={level}
                  >
                    <div
                      className={`h-full w-full rounded-sm border border-border ${level === 0 ? "bg-muted" : ""} ${level === 1 ? "bg-emerald-200 dark:bg-emerald-900" : ""} ${level === 2 ? "bg-emerald-400 dark:bg-emerald-700" : ""} ${level === 3 ? "bg-emerald-600 dark:bg-emerald-500" : ""} ${level === 4 ? "bg-emerald-800 dark:bg-emerald-300" : ""} `}
                    />
                    <span className="-top-8 absolute hidden rounded bg-popover px-2 py-1 text-popover-foreground text-xs shadow-md group-hover:block">
                      Level {level}
                    </span>
                  </div>
                )}
              </ContributionGraphLegend>
            </ContributionGraphFooter>
          </ContributionGraph>
        )}
      </motion.div>
    </div>
  );
};
