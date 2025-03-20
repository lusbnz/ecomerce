import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, resetCart } from "../redux/bazarSlice";
import { ProductsType, StoreState } from "types";
import toast from "react-hot-toast";
import QuantityButton from "./QuantityButton";

const CartItem = () => {
  const dispatch = useDispatch();
  const { productData } = useSelector((state: StoreState) => state.bazar);
  const handleResetCart = () => {
    const confirmed = window.confirm("Are you sure to reset your cart?");
    if (confirmed) {
      dispatch(resetCart()), toast.error("Cart reset successfully!");
    }
  };
  return (
    <div className="w-full md:w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">shopping cart</h2>
        <div>
          <div>
            {productData.map((item: ProductsType) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-6 mt-6"
              >
                <div className="flex flex-row items-center gap-2">
                  <div className="flex items-center gap-2">
                    <MdOutlineClose
                      onClick={() => {
                        dispatch(deleteItem(item._id)),
                          toast.error(`${item.title} is removed`);
                      }}
                      className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                    />
                    <img
                      className="w-32 h-32 object-cover"
                      src={item.image}
                      alt="productImg"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center">
                    <h2 className="md:w-52">{item.title}</h2>
                    <p className="w-10">${item.price}</p>
                  </div>
                </div>
                <QuantityButton existingProduct={item} className="w-auto" />
                <p className="w-14">${item.quantity! * item.price}</p>
              </div>
            ))}
          </div>
          <button
            onClick={handleResetCart}
            className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
          >
            Reset Cart
          </button>
        </div>
      </div>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          go shopping
        </button>
      </Link>
    </div>
  );
};

export default CartItem;
