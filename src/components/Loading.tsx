import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-full h-full absolute left-0 top-0 bg-white/90 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <Loader size={50} className="animate-spin text-yellow-600" />
        <p className="text-base font-semibold tracking-wide">
          Processing for payment...
        </p>
      </div>
    </div>
  );
};

export default Loading;
