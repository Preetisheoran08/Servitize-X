import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import AuthToggle from "../../components/auth/AuthToggle";
import FloatingInput from "../../components/auth/FloatingInput";

export default function AdminRegister() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="w-[420px] text-white font-serif">


        <div className="flex justify-center">
          <AuthToggle
            left="Register"
            right="Sign In"
            active="left"
            onLeft={() => {}}
            onRight={() => navigate("/admin/login")}
          />
        </div>
        


        <h1 className="text-3xl font-medium text-[#27C1F1] mt-6 mb-6">
          Register New Admin
        </h1>


        <FloatingInput label="Email" icon="✉" />
        <FloatingInput label="Password" type="password" icon="👁" />
        <FloatingInput label="Confirm Password" type="password" icon="👁" />
        <FloatingInput label="Username" />

        <div className="grid grid-cols-2 gap-4">
          <FloatingInput label="First Name" />
          <FloatingInput label="Last Name" />
        </div>

        <FloatingInput label="Company Name" icon="🏢" />


        <div className="flex items-center gap-2 mt-3 text-xs text-[#BFD4FF]">
          <input type="checkbox" className="accent-[#27C1F1]" />
          <span>
            By clicking you agree to our{" "}
            <span className="text-[#27C1F1] cursor-pointer">
              terms & services
            </span>
          </span>
        </div>


        <div className="flex justify-between items-center mt-6">
          <p className="text-sm text-[#BFD4FF]">
            Already an Admin?{" "}
            <span
              onClick={() => navigate("/admin/login")}
              className="text-[#27C1F1] cursor-pointer"
            >
              Sign In
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
            Register
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}
