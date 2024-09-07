import { useState } from "react";

type Props = {
  placeholder: string;
  options: { label: string; value: string }[];
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
};

const Select = ({ placeholder, options, value, setValue }: Props) => {
  const [isShowOptions, setIsShowOptions] = useState(false);

  const selectOption = (value: string) => {
    setValue(value);
    setIsShowOptions(false);
  };
  return (
    <div className="w-full relative">
      <div
        className="w-full flex items-center gap-x-2 cursor-pointer"
        onClick={() => setIsShowOptions(true)}
      >
        <div className="w-9 h-9 shrink-0 rounded-full border border-divider-main flex items-center justify-center"></div>
        <div className="flex-1 text-base  text-text-on_surface_one-600">
          {value || placeholder}
        </div>
        <div className="w-1 shrink-0 h-1 border"></div>
      </div>
      {isShowOptions && (
        <div
          className="fixed w-screen h-screen top-0 left-0 z-40 "
          onClick={() => setIsShowOptions(false)}
        ></div>
      )}
      {isShowOptions && (
        <div className="w-full absolute top-10 rounded-xl border-2 border-divider-main bg-surface-one z-50 shadow-xl p-2">
          <div className="w-full  p-1 flex flex-col gap-y-2 max-h-[200px] overflow-y-auto customScrollbar">
            {options.map((item) => (
              <div
                key={item.value}
                className={`text-base text-center text-text-on_surface_one-800 cursor-pointer`}
                onClick={() => selectOption(item.value)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
