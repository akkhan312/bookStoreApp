import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // Function to close the modal
  const closeModal = () => {
    const modal = document.getElementById("my_modal_1");
    modal.close();
  };

  return (
    <>
      <div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <div className="modal-action">
              <button onClick={closeModal} className="btn border-none">
                X
              </button>
            </div>
            <h3 className="font-bold text-2xl">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* Email section */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 py-1 rounded-md px-3 outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>

              {/* Password section */}
              <div className="mt-12 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-80 py-1 rounded-md px-3 outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-500">Password is required</p>
                )}
              </div>

              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-700 text-white rounded-md px-3 py-1"
                >
                  Login
                </button>
                <p>
                  Not registered?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-500 underline cursor-pointer"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}
