import { topDealProducts } from "../../../pages/demand/data/data";

function TopBox() {
  return (
    <div className="topBox font-tinos">
      <h1
        className="mb-5 text-2xl font-extrabold
       "
        style={{ color: "#000" }}
      >
        Top Demanding Products
      </h1>
      <div className="list">
        {topDealProducts.map((user) => (
          <div className="flex items-center justify-between mb-7" key={user.id}>
            <div className=" flex gap-5">
              <img
                src={user.img}
                className="w-11 h-11 rounded-full object-cover shadow-md"
              />
              <div className="flex flex-col gap-[5px]">
                <span className="text-sm font-bold " style={{ color: "#666" }}>
                  {user.username}
                </span>
                <span className="text-xs text-gray-500">{user.email}</span>
              </div>
            </div>
            <span className="font-bold" style={{ color: "#000" }}>
              {user.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBox;
