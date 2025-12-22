import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import AuthToggle from "../../components/auth/AuthToggle";
import FloatingInput from "../../components/auth/FloatingInput";

export default function AdminLogin() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="w-[420px] text-white font-domine">

     
        <div className="flex justify-center">
          <AuthToggle
            left="Register"
            right="Sign In"
            active="right"
            onLeft={() => navigate("/admin/register")}
            onRight={() => {}}
          />
        </div>

        <h2 className="text-2xl text-[#27C1F1] mt-6 mb-6">
          Login to Admin Account
        </h2>


        <FloatingInput label="Email" icon="✉" />
        <FloatingInput label="Password" type="password" icon="👁" />
        <FloatingInput label="Enter OTP" icon="🔢" />


        <div className="text-right text-sm text-[#BFD4FF] mb-4 cursor-pointer">
          Forgot password?
        </div>


        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-[#BFD4FF]">
            New Admin?{" "}
            <span
              onClick={() => navigate("/admin/register")}
              className="text-[#27C1F1] cursor-pointer"
            >
              Register
            </span>
          </p>

          <button
            className="
              px-8
              py-2
              rounded-full
              bg-[#16B5E8]
              hover:bg-[#0ea5d7]
              transition
            "
          >
            Sign In
          </button>
        </div>


        <div className="flex items-center gap-3 my-6 text-[#BFD4FF] text-xs">
          <div className="flex-1 h-px bg-[#BFD4FF]/40" />
          OR
          <div className="flex-1 h-px bg-[#BFD4FF]/40" />
        </div>


        <button
          className="
            w-full
            flex
            items-center
            justify-center
            gap-3
            bg-white
            text-gray-700
            py-2.5
            rounded-md
            text-sm
            font-medium
            hover:bg-gray-100
            transition
          "
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </div>
    </AuthLayout>
  );
}
