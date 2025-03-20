import { decrementQuantity, incrementQuantity } from "@/redux/bazarSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";
import { ProductsType } from "types";

interface Props {
  existingProduct: ProductsType;
  label?: boolean;
  className?: string;
}

const QuantityButton = ({
  existingProduct,
  label = true,
  className,
}: Props) => {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (existingProduct?.quantity! > 1) {
      dispatch(decrementQuantity(existingProduct?._id));
      toast.success("Quantity decreased successfully!");
    } else {
      toast.error("Quantity cannot decrease less then 1");
    }
  };

  return (
    <div
      className={twMerge(
        "w-52 flex items-center justify-between text-gray-500 gap-4 border p-3",
        className
      )}
    >
      {label && <p className="text-sm">Quantity</p>}
      <div className="flex items-center text-sm font-semibold">
        <button
          onClick={handleDecrease}
          className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
        >
          -
        </button>
        <p className="w-10 text-center">
          {existingProduct?.quantity ? existingProduct?.quantity : 1}
        </p>
        <button
          onClick={() => {
            dispatch(incrementQuantity(existingProduct?._id));
            toast.success("Quantity increased successfully!");
          }}
          className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityButton;
