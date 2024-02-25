import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { deleteUser, updateUser } from "../apis/userAPIs";
import toast from "react-hot-toast";
const Table = ({ data, setData }) => {
  const [editableRowId, setEditableRowId] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onEdit = (id) => {
    setEditableRowId(id);
  };

  const onUpdate = (id) => {
    updateUser(id, {
      firstName: getValues("First Name"),
      lastName: getValues("Last Name"),
      city: getValues("city"),
      state: getValues("state"),
      pin: getValues("pin"),
    })
      .then((response) => {
        toast.success("User updated successfully");
        setEditableRowId(null);
        setData(data.map((user) => (user._id === id ? response.data : user)));
      })
      .catch((error) => {
        toast.error("Error updating user");
      });
  };

  const onDelete = (id) => {
    deleteUser(id)
      .then((response) => {
        setData(data.filter((user) => user._id !== id));
        toast.success("User deleted successfully");
      })
      .catch((error) => {
        toast.error("Error deleting user");
      });
  };

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    First Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    City
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    State
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Pin
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Delete
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((user) => (
                  <tr
                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                    key={user._id}
                  >
                    {editableRowId === user._id ? (
                      <>
                        <td>
                          <input
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                            type="text"
                            placeholder={user.firstName}
                            defaultValue={user.firstName}
                            {...register("First Name")}
                          />
                        </td>
                        <td>
                          <input
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                            type="text"
                            placeholder={user.lastName}
                            defaultValue={user.lastName}
                            {...register("Last Name")}
                          />
                        </td>
                        <td>
                          <input
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                            type="text"
                            placeholder={user.city}
                            defaultValue={user.city}
                            {...register("city", { required: true })}
                          />
                        </td>
                        <td>
                          <input
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                            type="text"
                            placeholder={user.state}
                            defaultValue={user.state}
                            {...register("state", { required: true })}
                          />
                        </td>
                        <td>
                          <input
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                            type="text"
                            placeholder={user.pin}
                            defaultValue={user.pin}
                            {...register("pin", { required: true })}
                          />
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          {user.firstName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          {user.lastName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          {user.city}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          {user.state}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          {user.pin}
                        </td>
                      </>
                    )}
                    {editableRowId === user._id ? (
                      <>
                        <td>
                          <button
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-500 dark:text-green-500"
                            onClick={() => onUpdate(user._id)}
                          >
                            Update
                          </button>
                        </td>
                        <td>
                          <button
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-500 dark:text-red-500"
                            onClick={() => setEditableRowId(null)}
                          >
                            Cancel
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>
                          <button
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-500 dark:text-red-500"
                            onClick={() => onDelete(user._id)}
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          <button
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-500 dark:text-blue-500"
                            onClick={() => onEdit(user._id)}
                          >
                            Edit
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
