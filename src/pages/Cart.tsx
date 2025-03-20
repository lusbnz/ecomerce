import { useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { StoreState } from "types";
import CartItem from "@/components/CatItem";
import Container from "@/components/Container";
import _ from "lodash";
import { Loader } from "lucide-react";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const { productData, userInfo } = useSelector(
    (state: StoreState) => state.common
  );
  // const public_key = import.meta.env.VITE_PUBLIC_URL;

  const navigate = useNavigate();
  useEffect(() => {
    if (_.isEmpty(userInfo)) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  const [totalAmt, setTotalAmt] = useState("");
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity!;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      // const response = await fetch(`${public_key}/checkout`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     item: productData,
      //     email: userInfo?.email,
      //   }),
      // });
      // const data = await response.json();
      // if (data?.success) {
      //   const url = data?.url;
      //   if (url) {
      //     window.location.href = url;
      //   }
      // }
    } catch (error) {
      console.log(error, "Error");
      setLoading(false);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      {productData.length > 0 ? (
        <Container className="py-20 flex flex-col md:flex-row relative">
          <CartItem />
          <div className="w-full md:w-1/3 bg-[#fafafa] py-6 px-4">
            <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium ">cart totals</h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal{" "}
                <span className="font-titleFont font-bold text-lg">
                  ${totalAmt}
                </span>
              </p>
              <p className="flex items-start gap-4 text-base">
                Shipping{" "}
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quos, veritatis.
                </span>
              </p>
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold">${totalAmt}</span>
            </p>
            <button
              disabled={loading}
              onClick={handleCheckout}
              className="text-base bg-black text-white w-full py-3 mt-6 rounded-md hover:bg-gray-800 duration-300"
            >
              {loading ? "processing..." : "proceed to checkout"}
            </button>
          </div>
          {loading && (
            <div className="w-full h-full absolute left-0 top-0 bg-white/90 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-2">
                <Loader size={50} className="animate-spin text-yellow-600" />
                <p className="text-base font-semibold tracking-wide">
                  Processing for payment...
                </p>
              </div>
            </div>
          )}
        </Container>
      ) : (
        <div className="max-w-screen-xl mx-auto py-10 flex flex-col items-center gap-2 justify-center">
          <p className="text-xl text-orange-600 font-titleFont font-semibold">
            Your Cart is Empty. Please go back to Shopping and add products to
            Cart.
          </p>
          <Link to="/">
            <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">
              <span>
                <HiOutlineArrowLeft />
              </span>
              go shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
