import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="bg-[#04062c] w-32 h-screen absolute text-white">
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/demand"}>Demand</Link>
      </div>
      <div>
        <Link to={"/profit"}>Profit</Link>
      </div>
      <div>
        <Link to={"/manufacturer"}>Home</Link>
      </div>
      <div>
        <Link to={"/stock"}>Stock</Link>
      </div>
    </div>
  );
}

export default Navigation;
