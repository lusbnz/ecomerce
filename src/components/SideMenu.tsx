import _ from "lodash";
import { ShoppingBag, User } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { StoreState } from "types";

const SideMenu = () => {
  const { userInfo, productData } = useSelector(
    (state: StoreState) => state?.bazar
  );

  return (
    <div className="fixed z-40 right-2 top-80 space-y-1">
      <div className="bg-white text-black w-12 h-12 p-1 rounded-md hover:bg-black/10 hoverEffect border border-black/20 hover:border-black flex items-center justify-center">
        {_.isEmpty(userInfo) ? (
          <Link to={"/login"}>
            <User />
          </Link>
        ) : (
          <Link to={"/profile"}>
            {userInfo?.photoURL && (
              <img
                src={userInfo?.photoURL}
                alt="userImage"
                className="w-full h-full rounded-full"
              />
            )}
          </Link>
        )}
      </div>
      <div className="bg-white text-black p-3 rounded-md hover:bg-black/10 hoverEffect border border-black/20 hover:border-black relative">
        <Link to={"/cart"}>
          <ShoppingBag />
        </Link>
        <span className="absolute top-0.5 right-0.5 bg-black text-white text-[10px] rounded-full w-3.5 h-3.5 flex items-center justify-center">
          {productData ? productData?.length : 0}
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
