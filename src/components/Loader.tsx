import clsx from "clsx";
import { Loader2 } from "lucide-react";

const Loader = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 flex items-center justify-center bg-white text-black",
        className
      )}
    >
      <div className="text-center">
        <Loader2 className="w-16 h-16 animate-spin mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Bazar is loading...</h2>
        <p className="text-blue-700">
          Please wait while we fetch the latest deals for you.
        </p>
      </div>
    </div>
  );
};

export default Loader;
