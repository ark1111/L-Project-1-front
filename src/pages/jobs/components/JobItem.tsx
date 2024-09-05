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
    <div className="w-full rounded-xl border border-divider-main p-1">
      <div
        className="w-full p-2 rounded-lg"
        style={{ background: colorList[index % 6] }}
      ></div>
    </div>
  );
};

export default JobItem;
