import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Demand from "./pages/demand/Demand";
import Profit from "./pages/profit/Profit";
import Manufacturer from "./pages/manufacturer/Manufacturer";
import Stock from "./pages/stock/Stock";
import Navigation from "./components/navigation/Navigation";
function App() {
  return (
    <>
      <Navigation />
      <div className="ml-32 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demand" element={<Demand />} />
          <Route path="/profit" element={<Profit />} />
          <Route path="/manufacturer" element={<Manufacturer />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
