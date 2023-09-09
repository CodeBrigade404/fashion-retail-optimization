import { useState, useRef } from "react";
import StockDashBoard from "../../components/stock/StockDashBoard";
import CreateStocks from "../../components/stock/forms/CreateStocks";
import Box from "@mui/material/Box";
import StockTable from "../../components/stock/tables/StockTable";
import NavTabs from "../../components/stock/nav/NavTabs";

const Stock = () => {
  const dashboardRef = useRef(null);
  const createStocksRef = useRef(null);
  const stocksTableRef = useRef(null);

  // const handleButtonClick = (ref) => {
  //   ref.current.scrollIntoView({ behavior: "smooth" });
  // };
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case "dashboard":
        dashboardRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "createStocks":
        createStocksRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "stocksTable":
        stocksTableRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="demand overflow-hidden">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <NavTabs activeTab={activeTab} onChange={handleTabChange} />
        {/* <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={() => handleButtonClick(dashboardRef)}>One</Button>
          <Button onClick={() => handleButtonClick(createStocksRef)}>
            Two
          </Button>
          <Button onClick={() => handleButtonClick(stocksTableRef)}>
            Three
          </Button>
        </ButtonGroup> */}
      </Box>

      <div className="downBox h-[3600px] ">
        <div ref={dashboardRef}>
          <StockDashBoard />
        </div>
        <div ref={createStocksRef}>
          <CreateStocks />
        </div>
        <div ref={stocksTableRef}>
          <StockTable />
        </div>
      </div>
    </div>
  );
};

export default Stock;
