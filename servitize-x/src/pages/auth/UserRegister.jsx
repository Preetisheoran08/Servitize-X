import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout.jsx";
import AuthToggle from "../../components/auth/AuthToggle";
import FloatingInput from "../../components/auth/FloatingInput";

export default function UserRegister() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="w-[420px] text-white">

        
        <div className="flex justify-center">
          <AuthToggle
            left="Register"
            right="Log In"
            active="left"
            onLeft={() => {}}
            onRight={() => navigate("/user/login")}
          />
        </div>
        

        <h2 className="text-2xl text-[#27C1F1] mt-6 mb-4">
          Register New Account
        </h2>


        <p className="text-sm text-[#BFD4FF] mb-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/user/login")}
            className="text-[#27C1F1] cursor-pointer"
          >
            Log In
          </span>
        </p>


        <div className="grid grid-cols-2 gap-4">
          <FloatingInput label="First Name" />
          <FloatingInput label="Last Name" />
        </div>


        <FloatingInput label="Email" icon="✉" />
        <FloatingInput label="Password" type="password" icon="👁" />


        <div className="mt-6">
          <button
            className="
              px-10
              py-2
              rounded-full
              bg-[#16B5E8]
              hover:bg-[#0ea5d7]
              transition
            "
          >
            Register
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}
