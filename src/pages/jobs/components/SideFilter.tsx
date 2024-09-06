const WorkingScheduleList = [
  {
    id: 1,
    label: "Full time",
  },
  {
    id: 2,
    label: "Part time",
  },
  {
    id: 3,
    label: "Internship",
  },
  {
    id: 4,
    label: "Project work",
  },
  {
    id: 5,
    label: "Volunteering",
  },
];

const EmploymentTypeList = [
  {
    id: 1,
    label: "Full day",
  },
  {
    id: 2,
    label: "Flexible schedule",
  },
  {
    id: 3,
    label: "Shift work",
  },
  {
    id: 4,
    label: "Distant work",
  },
];

const SideFilter = () => {
  return (
    <div className="w-[256px] h-full pb-10 shrink-0">
      <div className="w-full h-full border-r border-divider-main pl-14 pr-6">
        <div className="text-xl font-medium text-text-on_background-main">
          Filters
        </div>
        <div className="w-full mt-6">
          <div className="text-base font-medium text-text-on_background-400 mb-1">
            Working schedule
          </div>
          {WorkingScheduleList.map((item) => (
            <div
              key={item.id}
              className="w-full flex items-center gap-x-2 mt-3"
            >
              <input type="checkbox" className="accent-primary-main" />
              <div className="text-base text-text-on_background-main font-medium ">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full mt-6">
          <div className="text-base font-medium text-text-on_background-400 mb-1">
            Employment type
          </div>
          {EmploymentTypeList.map((item) => (
            <div
              key={item.id}
              className="w-full flex items-center gap-x-2 mt-3"
            >
              <input type="checkbox" className="accent-primary-main" />
              <div className="text-base text-text-on_background-main font-medium ">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
