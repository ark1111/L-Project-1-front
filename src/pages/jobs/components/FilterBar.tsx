import Select from "../../../components/select/Select";

const FilterBar = () => {
  return (
    <div className="w-full h-40 bg-surface-one px-14 flex items-center justify-between gap-x-5">
      <div className="flex-1">
        <Select placeholder="Category" />
      </div>
      <div className="w-px h-14 bg-divider-main"></div>
      <div className="flex-1">
        <Select placeholder="Category" />
      </div>
      <div className="w-px h-14 bg-divider-main"></div>
      <div className="flex-1">
        <Select placeholder="Category" />
      </div>
      <div className="w-px h-14 bg-divider-main"></div>
      <div className="flex-1">
        <Select placeholder="Category" />
      </div>
      <div className="w-px h-14 bg-divider-main"></div>
      <div className="flex-grow-[1.5] h-2"></div>
    </div>
  );
};

export default FilterBar;
