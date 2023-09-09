import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Users() {
  const [users, setUsers] = useState([]);
  const [newRec, setNewRec] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, [newRec]);

  const handleDelete = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3001/deleteUser/${id}`)
      .then(() => {
        toast.success("Employee was deleted successfully");
        setNewRec(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <ToastContainer />
        <div className="bg-green-500 p-2">
          <h1 className="font-bold uppercase text-center text-white">
            Employee Dashboard
          </h1>
        </div>
        <div className="flex justify-end p-2">
          <Link to={"/createUser"}>
            <button className="bg-green-500 text-white p-2 rounded-lg">
              Create Users
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center mb-6">
          <table className="cursor-pointer overflow-x-scroll overflow-y-scroll rounded-md shadow-lg">
            <thead className="">
              <tr className="bg-teal-500 uppercase text-white">
                <th className="p-2 px-4 text-left">S:No</th>
                <th className="p-2 px-4 text-left">Name</th>
                <th className="p-2 px-4 text-left">Age</th>
                <th className="p-2 px-4 text-left">EMail</th>
                <th className="p-2 px-4 text-left">Profession</th>
                <th className="p-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => {
                return (
                  <tr className="bg-white" key={index}>
                    <td className="p-2 px-4 font-bold">{index + 1}</td>
                    <td className="p-2 px-4">{user?.Name}</td>
                    <td className="p-2 px-4">{user?.Age}</td>
                    <td className="p-2 px-4">{user?.EMail}</td>
                    <td className="p-2 px-4">{user?.Profession}</td>
                    <td className="flex p-2 px-4 gap-2">
                      <Link to={`/updateUser/${user?._id}`}>
                        <button className="bg-green-500 p-2 text-sm rounded-lg text-white font-bold uppercase">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="bg-red-500 p-2 text-sm rounded-lg text-white font-bold uppercase"
                        onClick={(e) => handleDelete(e, user?._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <footer className="bg-green-500 p-2">
          <h1 className="font-bold uppercase text-center text-white">
            Developed with &#10084; by Aakash
          </h1>
        </footer>
      </div>
    </div>
  );
}

export default Users;
