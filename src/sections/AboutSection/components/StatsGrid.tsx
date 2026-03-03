import { StatCard } from "@/sections/AboutSection/components/StatCard";

export const StatsGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-3 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-3 md:gap-x-4 md:grid-cols-[1fr_1fr_1fr] md:gap-y-4">
      <StatCard statValue="8+" statLabel="Years of experience" />
      <StatCard statValue="50+" statLabel="Products Developed" />
      <StatCard statValue="30+" statLabel="in-House Developers" />
    </div>
  );
};
