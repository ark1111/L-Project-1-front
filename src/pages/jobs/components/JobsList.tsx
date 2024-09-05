import JobItem from "./JobItem";

const JobsList = () => {
  return (
    <div className="w-full h-full flex-1  pr-14 pl-6">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-x-6">
          <div className="text-3xl font-bold text-text-on_background-main">
            Recommended jobs
          </div>
          <div className="px-3 py-1 rounded-full border border-divider-main text-lg text-text-on_background-main font-bold">
            256
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <div className="text-base text-text-on_background-600 font-medium">
            Sorted by:{" "}
            <span className="text-text-on_background-main">Last updated</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap mt-8 gap-6">
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <div key={item} className="w-[calc(25%-18px)] shrink-0">
            <JobItem index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsList;

// 3 item ---> "w-[calc(33.333333%-16px)]"
