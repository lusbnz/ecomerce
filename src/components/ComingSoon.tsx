import type { FC } from "react";

interface ComingSoonProps {
  pageName: string;
}

const ComingSoon: FC<ComingSoonProps> = ({ pageName }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-r from-blue-100 to-purple-100 font-titleFont">
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
        {pageName}
      </h1>
      <p className="text-xl text-gray-600 mb-8 text-center">
        {pageName} page will be uploaded soon. Stay tuned!
      </p>
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin" />
    </div>
  );
};

export default ComingSoon;
