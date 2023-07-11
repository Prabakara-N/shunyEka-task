import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../redux/features/userSlice";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => ({ ...state.user }));

  useEffect(() => {
    dispatch(getUsers()); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(users);

  const handleDelete = (id) => {
    dispatch(deleteUser({ id, toast }));
  };

  if (!loading) {
    <Loader />;
  }

  return (
    <div className="px-40 py-6">
      <Link className="flex justify-end" to={"/adduser"}>
        <button
          type="button"
          className="bg-indigo-800 text-white rounded-md py-2 px-3"
        >
          + ADD USER
        </button>
      </Link>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3 pl-4"></th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      User ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      User Name
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {users && users.length > 0 ? (
                    users.map((user) => {
                      return (
                        <tr key={user._id}>
                          <td className="py-3 pl-4">
                            <div className="flex items-center h-5"></div>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {user._id}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 font-semibold whitespace-nowrap">
                            {user.userName}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            <Link to={"/userinfo"}>
                              <button
                                type="button"
                                className="text-blue-800 py-2 px-3 rounded-md border-solid border-[1px] border-blue-700"
                              >
                                View
                              </button>
                            </Link>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap cursor-pointer flex items-center justify-center gap-4">
                            <Link to={`/edituser/${user._id}`}>
                              <button
                                type="button"
                                className="text-gray-700 flex items-center justify-center gap-2 py-2 px-3 rounded-md border-solid border-[1px] border-gray-800"
                              >
                                Update <MdEdit />
                              </button>
                            </Link>

                            <button
                              type="button"
                              onClick={() => handleDelete(user._id)}
                              className="text-red-500 flex items-center justify-center gap-2 py-2 px-3 rounded-md border-solid border-[1px] border-red-500"
                            >
                              Delete <MdDelete />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <>
                      <tr>
                        <td className="text-center text-gray-400 font-medium">
                          No Users
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
