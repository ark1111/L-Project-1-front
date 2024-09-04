import { useState } from "react";

const menuList = [
  {
    id: 1,
    title: "Find job",
    link: "/find-job",
    lineWidth: 67,
  },
  {
    id: 2,
    title: "Messages",
    link: "/messages",
    lineWidth: 79,
  },
  {
    id: 3,
    title: "Hiring",
    link: "/hiring",
    lineWidth: 53,
  },
  {
    id: 4,
    title: "Community",
    link: "/community",
    lineWidth: 92,
  },
  {
    id: 5,
    title: "FAQ",
    link: "/faq",
    lineWidth: 39,
  },
];

const Menu = () => {
  const [activeId, setActiveId] = useState(1);

  const changeMenu = (id: number) => {
    setActiveId(id);
  };

  const findLinePosition = () => {
    let amount = 0;
    for (let i = 0; i < menuList.length; i++) {
      if (i + 1 < activeId) {
        amount += menuList[i].lineWidth;
      }
    }
    amount += (activeId - 1) * 40;
    return amount;
  };
  return (
    <div className="w-full h-full flex items-center gap-x-10 relative">
      {menuList.map((item) => (
        <div
          key={item.id}
          className="text-base text-text-on_surface_one-main cursor-pointer flex items-center justify-center"
          onClick={() => changeMenu(item.id)}
          style={{ width: item.lineWidth }}
        >
          {item.title}
        </div>
      ))}
      <div
        className="h-1 bg-text-on_surface_one-main absolute -bottom-0.5 left-0 transition-all duration-500"
        style={{
          width: `${menuList[activeId - 1].lineWidth}px`,
          transform: `translateX(${findLinePosition()}px)`,
        }}
      ></div>
    </div>
  );
};

export default Menu;
