import React, { useEffect } from "react";
import { singleUser } from "../redux/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => ({ ...state.user }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(singleUser(id));
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="flex items-center justify-center min-h-screen max-w-3xl mx-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="row" className="px-10 py-3">
              ID
            </th>
            <th scope="row" className="px-10 py-3">
              Name
            </th>
            <th scope="row" className="px-10 py-3">
              Email
            </th>
            <th scope="row" className="px-10 py-3">
              Phone Number
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {user._id}
            </th>
            <td className="px-10 py-4">{user.userName}</td>
            <td className="px-10 py-4">{user.email}</td>
            <td className="px-10 py-4">{user.number}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
