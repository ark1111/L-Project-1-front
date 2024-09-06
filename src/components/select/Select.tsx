type Props = {
  placeholder: string;
};

const Select = ({ placeholder }: Props) => {
  return (
    <div className="w-full relative">
      <div className="w-full flex items-center gap-x-2 cursor-pointer">
        <div className="w-9 h-9 shrink-0 rounded-full border border-divider-main flex items-center justify-center"></div>
        <div className="flex-1 text-base  text-text-on_surface_one-600">
          {placeholder}
        </div>
        <div className="w-1 shrink-0 h-1 border"></div>
      </div>
    </div>
  );
};

export default Select;
