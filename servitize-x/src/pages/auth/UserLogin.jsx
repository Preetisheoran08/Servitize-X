import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import AuthToggle from "../../components/auth/AuthToggle";
import FloatingInput from "../../components/auth/FloatingInput";

export default function UserLogin() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      
      <div className="w-full flex justify-center">
        
        
        <div className="w-[420px] text-white text-center">


          <div className="flex justify-center">
            <AuthToggle
              left="Register"
              right="Log In"
              active="right"
              onLeft={() => navigate("/user/register")}
              onRight={() => {}}
            />
          </div>


          <h2 className="text-2xl text-[#27C1F1] mt-6">
            Log In To Your Account
          </h2>


          <p className="text-sm text-[#BFD4FF] mt-2 mb-6">
            New Here?{" "}
            <span
              onClick={() => navigate("/user/register")}
              className="text-[#27C1F1] cursor-pointer"
            >
              Register
            </span>
          </p>


          <div className="text-left">
            <FloatingInput label="Email" icon="✉" />
            <FloatingInput label="Password" type="password" icon="👁" />
            <FloatingInput label="Enter OTP" icon="🔢" />
          </div>
          
          
          <div className="flex justify-center mt-6">
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
              Log In
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
