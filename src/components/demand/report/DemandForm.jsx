import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
function DemandForm() {
  return (
    <div className="demandFormBox p-5 flex flex-col justify-between gap-5">
      <h1 className=" text-[35px] font-bold " style={{ color: "#494FBF" }}>
        Manage Product
      </h1>
      <div
        className="demandForm"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          gridAutoRows: "minmax(40px, auto)",
          fontFamily: "inter",
        }}
      >
        <div className="dDox1 ">
          <div className="flex flex-col">
            <label htmlFor="productID" className="text-[15px]">
              Product Id
            </label>
            <input
              type="text"
              name="productID"
              id="productID"
              placeholder=" WS-003"
              className="border-4 p-3 w-[100%]"
              style={{
                border: "2px #D9D9D9 solid",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            />
          </div>
        </div>
        <div className="dDox2">
          <div className="flex flex-col">
            <label htmlFor=" AverageOrder" className="text-[15px]">
              Average Order
            </label>
            <input
              type="text"
              name="AverageOrder"
              id=" AverageOrder"
              placeholder="280"
              className=" p-3 w-[100%]"
              style={{
                border: "2px #D9D9D9 solid",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            />
          </div>
        </div>
        <div className="dDox3">
          <div className="flex flex-col">
            <label htmlFor="decrease" className="text-[15px]">
              <Checkbox {...label} defaultChecked /> Decrease
            </label>

            <input
              type="text"
              name=""
              id="decrease"
              placeholder="amount..."
              className="border-4 p-3 w-[100%]"
              style={{
                border: "2px #D9D9D9 solid",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            />
          </div>
        </div>
        <div className="dDox4">
          <div className="flex flex-col">
            <label htmlFor="increase" className="text-[15px]">
              <Checkbox {...label} defaultChecked /> Increase
            </label>
            <input
              type="text"
              name=""
              id="increase"
              placeholder="amount..."
              className="border-4 p-3 w-[100%]"
              style={{
                border: "2px #D9D9D9 solid",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            />
          </div>
        </div>
        <div className="dDox5" style={{ gridColumn: "1/3", gridRow: "span 3" }}>
          <div className="flex flex-col">
            <label htmlFor="productID" className="text-[15px]">
              Justification
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              className="h-[100%] border-4"
              placeholder="type here....."
              style={{
                border: "2px #D9D9D9 solid",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            ></textarea>
          </div>
        </div>
        <div
          className="dDox6 flex justify-center items-center"
          style={{ fontFamily: "lato" }}
        >
          <button
            className="py-[10px]  w-[80%] rounded-md text-white"
            style={{ backgroundColor: "#04062C" }}
          >
            Save
          </button>
        </div>
        <div
          className="dDox7 flex justify-center items-center"
          style={{ fontFamily: "lato" }}
        >
          <button
            className="py-[10px] bg-blue-500 w-[80%] rounded-md text-white"
            style={{ backgroundColor: "#EC5959" }}
          >
            PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default DemandForm;
