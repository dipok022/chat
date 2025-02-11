import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-[420px] border border-[#e4e7ec] rounded-xl">
        <div className="p-6 space-y-4">
          <h4 className="text-2xl text-[#1E1663] font-medium text-center">
            Log in
          </h4>
          <form className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-base text-[#3E4C59] font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="email"
                className="w-full border border-[#e4e7ec] rounded-md py-1.5 px-3 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-base text-[#3E4C59] font-medium"
              >
                Password
              </label>
              <input
                type="text"
                id="password"
                placeholder="********"
                className="w-full border border-[#e4e7ec] rounded-md py-1.5 px-3 outline-none"
              />
            </div>
            <button
              type="submit"
              className="py-1.5 border border-[#3B2BC6] bg-[#4A36F7] rounded-md w-full text-sm text-[#FFFFFF] font-medium"
            >
              Login
            </button>
            <div className="text-sm text-[#52606D] font-normal text-center">
              If the user does not have an account?{" "}
              <Link to="/app/register" className="font-medium text-[#6E5EF9]">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
