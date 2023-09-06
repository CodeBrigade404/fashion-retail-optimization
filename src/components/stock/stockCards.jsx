const StockCard = () => {
  const stockData = [
    {
      title: "Total Quantity",
      value: 1000,
    },
    {
      title: "Ordered Quantity",
      value: 800,
    },
    {
      title: "Dispatched Quantity",
      value: 600,
    },
    {
      title: "Remaining Quantity",
      value: 400,
    },
  ];

  return (
    <div className="flex justify-start h-screen items-start bg-[#F5F5F5]">
      {stockData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-6 mx-4 my-4 flex-1 max-w-xs"
        >
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-3xl font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StockCard;
