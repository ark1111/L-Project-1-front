import FilterBar from "./components/FilterBar";
import JobsList from "./components/JobsList";
import SideFilter from "./components/SideFilter";

const Jobs = () => {
  return (
    <div className="w-full h-full">
      <FilterBar />
      <div className="w-full pt-10 flex h-[calc(100%-160px)]">
        <SideFilter />
        <JobsList />
      </div>
    </div>
  );
};

export default Jobs;
