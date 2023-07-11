import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { createUser } from "../redux/features/userSlice";

const initialState = {
  userName: "",
  email: "",
  number: "",
};

const AddEdituser = () => {
  const [userInfo, setUserInfo] = useState(initialState);
  const { userName, email, number } = userInfo;
  const { id } = useParams();

  const { error, loading } = useSelector((state) => ({ ...state.user }));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (userName && email && number) {
      const newUser = { ...userInfo };
      console.log(newUser);
      dispatch(createUser({ newUser, navigate, toast }));
      setUserInfo({ userName: "", email: "", number: "" });
    } else {
      toast.error("All fields are mandatory...");
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-300">
      <div className="w-full max-w-sm">
        <form
          onSubmit={submitHandler}
          className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="userName"
              value={userName}
              onChange={onInputChange}
              placeholder="Username"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              value={email}
              name="email"
              onChange={onInputChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="number"
              value={number}
              name="number"
              onChange={onInputChange}
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {id ? "Update User" : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEdituser;
