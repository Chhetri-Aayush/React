import { Outlet } from "react-router-dom";

function LayoutWithoutNavFooter() {
  return (
    <div className="content">
      <Outlet />
    </div>
  );
}

export default LayoutWithoutNavFooter;
