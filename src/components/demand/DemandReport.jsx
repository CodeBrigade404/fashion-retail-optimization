import DemandChartHeader from "./report/DemandChartHeader";
import DemandForm from "./report/DemandForm";
import DemandMonthChart from "./report/DemandMonthChart";

function DemandReport() {
  return (
    <div className="demandProductTable h-screen mx-[20px] overflow-hidden">
      <div className="content flex gap-6 justify-between h-[85%] mt-[70px]">
        <div
          className="monthChartBox w-[60%] h-[100%]  bg-white rounded-md mt-5"
          style={{ boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)" }}
        >
          <div className="monthChart h-[100%] flex flex-col justify-between ">
            <DemandChartHeader />
            <DemandMonthChart />
          </div>
        </div>
        <div
          className="demandForm w-[40%] h-[100%] bg-white rounded-md mt-5"
          style={{ boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)" }}
        >
          <DemandForm />
        </div>
      </div>
    </div>
  );
}

export default DemandReport;
