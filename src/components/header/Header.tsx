import Menu from "./Menu";
import Tools from "./Tools";

const Header = () => {
  return (
    <div className="w-full h-24 bg-surface-one px-14 flex items-center justify-between border-b border-divider-main">
      {/* ----logo-and-menu-------- */}
      <div className="h-full flex items-center gap-x-16">
        {/* -----logo----- */}
        <div className="flex items-center gap-x-2">
            <div className="text-2xl font-medium text-text-on_surface_one-main">Winry</div>
        </div>
        <Menu/>
      </div>
      <Tools/>
      
    </div>
  );
}

export default Header