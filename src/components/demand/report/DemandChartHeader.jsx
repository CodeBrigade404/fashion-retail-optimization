function DemandChartHeader() {
  return (
    <div className="demandChartHeader flex justify-between gap-10 p-8 pb-0">
      <div className="demandDetails w-full flex flex-col">
        <h1 className=" text-[35px] font-bold " style={{ color: "#494FBF" }}>
          Monthly Demand
        </h1>
        <div
          className="productDetails flex justify-between gap-14 font-bold mt-7"
          style={{ fontFamily: "roboto" }}
        >
          <div className="flex flex-col w-full">
            <span className="text-gray-500">ID - WS-003</span>
            <span className="text-xl"> Women's Long Sleeve Tops</span>
          </div>
          <div className="flex flex-col w-full">
            <span className="text-gray-500">ManufactureId- M023</span>
            <span className="text-xl">Dreamy Damsel</span>
          </div>
        </div>
      </div>
      <div className="demandDetails6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-B0mU0MFSmUgPGjYaI83yrsZtL1Z7LzZ6bA&usqp=CAU"
          alt=""
          className="w-[250px]"
        />
      </div>
    </div>
  );
}

export default DemandChartHeader;
