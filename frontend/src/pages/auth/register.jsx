import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handelSubmit(event) {
    event.preventDefault();
    console.log(userInfo);
    try {
      const response = await fetch("/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      // Redirect to login page
      //   window.location.href = "/login";
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-[420px] border border-[#e4e7ec] rounded-xl">
        <div className="p-6 space-y-4">
          <h4 className="text-2xl text-[#1E1663] font-medium text-center">
            Create account
          </h4>
          <form className="space-y-4" onSubmit={handelSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-base text-[#3E4C59] font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full border border-[#e4e7ec] rounded-md py-1.5 px-3 outline-none"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, name: e.target.value })
                }
              />
            </div>
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
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
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
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="py-1.5 border border-[#3B2BC6] bg-[#4A36F7] rounded-md w-full text-sm text-[#FFFFFF] font-medium"
            >
              Sign up
            </button>
            <div className="text-sm text-[#52606D] font-normal text-center">
              Already have an account?{" "}
              <Link to="/app/login" className="font-medium text-[#6E5EF9]">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
