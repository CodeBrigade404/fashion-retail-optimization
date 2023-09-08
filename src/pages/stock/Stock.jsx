import TopNavTabs from "../../components/navigation/TopNavButtons";
import StockCard from "../../components/stock/stockCards";

const Stock = () => {
  return (
    <div>
      <TopNavTabs />
      <div className="container mx-auto">
        <StockCard />
      </div>
    </div>
  );
};

export default Stock;
