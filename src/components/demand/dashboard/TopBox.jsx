import { topDealUsers } from "../../../pages/demand/data/data";

function TopBox() {
  return (
    <div className="topBox" style={{ fontFamily: "Inter" }}>
      <h1 className="mb-5 text-3xl font-bold " style={{ color: "#494FBF" }}>
        Top Products
      </h1>
      <div className="list">
        {topDealUsers.map((user) => (
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
            <span className="font-bold" style={{ color: "#EC5959" }}>
              {user.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBox;
