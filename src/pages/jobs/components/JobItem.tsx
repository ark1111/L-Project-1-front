const colorList = [
  "#FDECD4",
  "#e2d9f9",
  "#E4E8F4",
  "#d4e8c3",
  "#cde2e3",
  "#fcd4c7",
];

type Props = {
  index: number;
};

const JobItem = ({ index }: Props) => {
  return (
    <div className="w-full rounded-2xl border border-divider-main p-1 bg-surface-two">
      <div
        className="w-full p-4 rounded-xl"
        style={{ background: colorList[index % 6] }}
      >
        <div className="w-full flex items-center justify-between">
          <div className="h-9 flex items-center justify-center text-sm font-medium text-text-on_surface_two-main px-3 rounded-full bg-surface-two">
            20 May,2023
          </div>
          <div className="w-9 h-9 rounded-full flex items-center justify-center bg-surface-tw cursor-pointer"></div>
        </div>
        <div className="text-sm text-text-on_surface_two-main font-medium mt-5">
          Amazon
        </div>
        <div className="w-full h-[200px] flex flex-col justify-between mt-1">
          <div className="w-full flex items-center gap-x-4">
            <div className="flex-1 text-2xl text-text-on_surface_two-main font-semibold">
              Senior UI/UX Designer
            </div>
            <div className="w-10 h-10 shrink-0  rounded-full bg-surface-two flex items-center justify-between"></div>
          </div>
          <div className="w-full flex items-center gap-x-2 gap-y-1 flex-wrap">
            {["test", "full-time", "hooooooo"].map((item) => (
              <div
                key={item}
                className="px-2 h-8 rounded-full border border-divider-main flex items-center justify-center text-xs font-medium text-text-on_surface_two-main"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-6 flex items-center justify-between">
        <div className="flex-1 pr-3">
          <div className="text-base text-text-on_surface_two-main font-medium">
            $200/hr
          </div>
          <div className="text-base text-text-on_surface_two-400 font-medium">
            New York
          </div>
        </div>
        <div className="w-20 h-9 rounded-full bg-surface-one text-text-on_surface_one-main text-base cursor-pointer flex items-center justify-center">
          Details
        </div>
      </div>
    </div>
  );
};

export default JobItem;
