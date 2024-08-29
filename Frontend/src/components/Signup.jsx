import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center justify-center md:ml-1 ml-10">
      <div id="my_modal_1" className="">
        <div className="modal-box">
          <div className="modal-action">
            <Link to="/" className="btn border-none">X</Link>
          </div>
          <h3 className="font-bold text-2xl">Signup</h3>


          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* Name section */}
          <div className="mt-12 space-y-2">
            <span>Full Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-80 py-1 rounded-md px-3 outline-none"
              {...register("name", { required: true })}
            />
            {errors.name && (
                  <p className="text-red-500">Name is required</p>
                )}
          </div>

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
                  <p className="text-red-500">email is required</p>
                )}
          </div>

          {/* Password section */}
          <div className="mt-12 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 py-1 rounded-md px-3 outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && (
                  <p className="text-red-500">password is required</p>
                )}
          </div>

          <div className="flex justify-around mt-4">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-700 text-white rounded-md px-3 py-1"
            >
              Signup
            </button>
            <p>
              Have an account?{' '}
              <Link to="/"
                className="text-blue-500 underline cursor-pointer"
                onClick={() => navigate('/login')}
              >
                Login
              </Link>
              <Login/>
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
