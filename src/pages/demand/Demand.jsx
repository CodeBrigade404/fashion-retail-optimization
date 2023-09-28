import React, { useEffect, useRef, useState } from "react";
//import Head from "../../components/demand/Head";
import DashBoard from "../../components/demand/DashBoard";
import DemandProductTable from "../../components/demand/DemandProductTable";
import DemandReport from "../../components/demand/DemandReport";
import DemandNav from "../../components/demand/DemandNav";
import DemandNoticeTable from "../../components/demand/demandNoticeTable";

function Demand() {
  const page1 = useRef(null);
  const page2 = useRef(null);
  const page3 = useRef(null);

  const [activeButton, setActiveButton] = useState(1);

  const handleTabChange = () => {
    // Scroll to the selected tab's reference
    switch (activeButton) {
      case 1:
        page1.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        page2.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        page3.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleTabChange();
  }, [activeButton]);

  const [currentProduct, setCurrentProduct] = useState(
    "6514eff760de6ea52414dc98"
  );
  const [demandNotice, setDemandNotice] = useState("");

  console.log("currentProduct ", currentProduct);
  console.log("demandNotice ", demandNotice);
  return (
    <div className="demand overflow-hidden  " ref={page1}>
      <div className="upBox flex  mt-11 mb-8 items-center  ">
        <DemandNav
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </div>
      <div className="downBox ">
        <div>
          <DashBoard />
        </div>
        <div ref={page2}>
          <DemandProductTable
            currentProduct={currentProduct}
            method={setCurrentProduct}
          />
        </div>
        <div ref={page3}>
          <DemandReport
            currentProduct={currentProduct}
            notice={demandNotice}
            demandMethod={setDemandNotice}
          />
        </div>
        <div>
          <DemandNoticeTable
            notice={demandNotice}
            demandMethod={setDemandNotice}
          />
        </div>
      </div>
    </div>
  );
}

export default Demand;
