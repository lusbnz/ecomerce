import { headerData } from "@/constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useSelector } from "react-redux";
import { StoreState } from "types";
import _ from "lodash";

const MobileNav = ({ pathname }: { pathname: string }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { userInfo } = useSelector((state: StoreState) => state?.bazar);
  return (
    <div className="md:hidden">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="bg-gray-100 p-2 rounded-md border hover:border-gray-950 duration-300"
      >
        {showMenu ? <X /> : <Menu />}
      </button>
      {showMenu && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 mt-4 bg-white border w-full p-5"
          >
            <div className="flex flex-col space-y-2">
              {headerData?.map((item) => (
                <Link
                  onClick={() => setShowMenu(false)}
                  key={item?.title}
                  to={item?.link}
                  className={`border-b py-1 last:border-b-0 text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ${
                    pathname === item?.link && "text-orange-900 underline"
                  }`}
                >
                  {item?.title}
                </Link>
              ))}
              <div>
                {!_.isEmpty(userInfo) ? (
                  <Link
                    to={"/profile"}
                    onClick={() => setShowMenu(false)}
                    className="flex items-center gap-2 group"
                  >
                    <img
                      className="w-8 h-8 rounded-full object-cover"
                      src={userInfo?.photoURL}
                      alt={userInfo?.displayName}
                    />

                    <p
                      className={`font-semibold group-hover:text-orange-900 group-hover hoverEffect hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-30 ${
                        pathname === "/profile" && "text-orange-900 underline"
                      }`}
                    >
                      {userInfo?.displayName}
                    </p>
                  </Link>
                ) : (
                  <Link
                    to={"/login"}
                    className={`text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ${
                      pathname === "/login" && "text-orange-900 underline"
                    }`}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default MobileNav;
