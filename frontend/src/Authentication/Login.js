import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  //   handle login from for user
  const handleLoginForm = (e) => {
    e.preventDefault();
    const username = e?.target?.username?.value;
    const password = e?.target?.password?.value;
    const data = { username, password };
    if (data.username === "Asif" && data.password === "123456") {
      Swal.fire({
        title: "Success!",
        text: "Welcome to genzam bank!",
        icon: "success",
        confirmButtonText: "Thank you!",
        confirmButtonColor: "#374151",
        background: "#1f2937",
        color: "#fff",
      });
      navigate("/home");
    } else {
      Swal.fire({
        title: "Error!",
        text: "Your email and password doe's not match!",
        icon: "error",
        confirmButtonText: "Try again",
        confirmButtonColor: "#374151",
        background: "#1f2937",
        color: "#fff",
      });
    }
  };
  return (
    <div>
      <form
        onSubmit={handleLoginForm}
        className="md:w-1/2 shadow-xl rounded mt-[20vh] mx-auto my-auto border-secondary border-2 p-5"
      >
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="bg-secondary p-2 w-full rounded outline-none"
            placeholder="username"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-secondary p-2 w-full rounded outline-none"
            placeholder="•••••••••"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-secondary px-5 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
