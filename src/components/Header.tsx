import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";
import { StoreState } from "types";
import { headerData } from "@/constants";
import Container from "./Container";
import MobileNav from "./MobileNav";
import _ from "lodash";
import { cartImg, logoDark } from "@/assets";

const Header = () => {
  const productData = useSelector(
    (state: StoreState) => state.bazar.productData
  );

  const { userInfo } = useSelector((state: StoreState) => state.bazar);
  const { pathname } = useLocation();

  return (
    <div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <Container className="max-w-screen-xl h-full mx-auto flex items-center justify-between relative">
        <Link to="/">
          <div>
            <img className="w-28" src={logoDark} alt="logoDark" />
          </div>
        </Link>
        <div className="hidden md:inline-flex items-center gap-8">
          <div className="hidden md:inline-flex items-center gap-8">
            {headerData?.map((item) => (
              <Link to={item?.link} key={item?.title}>
                <p
                  className={`text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ${
                    pathname === item?.link && "text-orange-900 underline"
                  }`}
                >
                  {item?.title}
                </p>
              </Link>
            ))}
          </div>

          {_.isEmpty(userInfo) ? (
            <Link
              to={"/login"}
              className={`text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ${
                pathname === "/login" && "text-orange-900 underline"
              }`}
            >
              Login
            </Link>
          ) : (
            <Link
              to={"/profile"}
              className={`text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ${
                pathname === "/profile" && "text-orange-900 underline"
              }`}
            >
              Profile
            </Link>
          )}

          <Link to="/cart">
            <div className="relative">
              <img className="w-6" src={cartImg} alt="cartImg" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                {productData.length}
              </span>
            </div>
          </Link>
        </div>
        <MobileNav pathname={pathname} />
      </Container>
    </div>
  );
};

export default Header;
