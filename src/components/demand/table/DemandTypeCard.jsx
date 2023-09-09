import React from "react";

function DemandTypeCard(props) {
  var color = "";
  if (props.type === "High") {
    color = "#E77E7E"; // Use your custom color here
  }
  if (props.type === "Medium") {
    color = "#83DBB1"; // Use your custom color here
  }
  if (props.type === "Low") {
    color = "#DECE3B"; // Use your custom color here
  }
  return (
    <div
      className=" h-10 w-[100px] rounded-md flex justify-center items-center text-black text-base font-bold"
      style={{ fontFamily: "lato", backgroundColor: color }}
    >
      {props.type}
    </div>
  );
}

export default DemandTypeCard;
