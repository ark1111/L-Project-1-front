import { useState } from "react";
import Select from "../../../components/select/Select";

const selectList = [
  {
    label: "one",
    value: "one",
  },
  {
    label: "two",
    value: "two",
  },
  {
    label: "three",
    value: "three",
  },
  {
    label: "four",
    value: "four",
  },
];

const FilterBar = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [experience, setExperience] = useState<string | null>(null);
  const [company, setCompany] = useState<string | null>(null);
  return (
    <div className="w-full h-40 bg-surface-one px-14 flex items-center justify-between gap-x-5">
      <div className="flex-1">
        <Select
          placeholder="Category"
          options={selectList}
          value={category}
          setValue={setCategory}
        />
      </div>
      <div className="w-px h-14 bg-divider-main"></div>
      <div className="flex-1">
        <Select
          placeholder="Location"
          options={selectList}
          value={location}
          setValue={setLocation}
        />
      </div>
      <div className="w-px h-14 bg-divider-main"></div>
      <div className="flex-1">
        <Select
          placeholder="Experience"
          options={selectList}
          value={experience}
          setValue={setExperience}
        />
      </div>
      <div className="w-px h-14 bg-divider-main"></div>
      <div className="flex-1">
        <Select
          placeholder="Company"
          options={selectList}
          value={company}
          setValue={setCompany}
        />
      </div>
      <div className="w-px h-14 bg-divider-main"></div>
      <div className="flex-grow-[1.5] h-2"></div>
    </div>
  );
};

export default FilterBar;
