import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../../../../firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "@/redux/bazarSlice";
import { useNavigate } from "react-router";
const GoogleLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result && result?.user) {
        const data = result?.user?.providerData[0];
        if (data) {
          dispatch(addUser(data));
        }
      } else {
        dispatch(removeUser());
      }
    } catch (error) {
      console.error("Google login error", error);
    } finally {
      setIsLoading(false);
      navigate("/");
    }
  };

  return (
    <button
      disabled={isLoading}
      className="border w-full text-sm flex items-center justify-center gap-2 py-2 rounded-md bg-white font-semibold hover:bg-gray-100 hoverEffect"
      onClick={handleGoogleLogin}
    >
      <FcGoogle className="size-6" />
      <span>Sign in with Google</span>
    </button>
  );
};

export default GoogleLogin;
