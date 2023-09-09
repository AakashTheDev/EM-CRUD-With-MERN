import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function UpdateUsers() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id, "ID");
  const [users, updateUsers] = useState({
    Name: "",
    Age: Number,
    EMail: "",
    Profession: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getUser/${id}`)
      .then((res) => updateUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updateUser = {
      Name: users?.Name,
      Age: users?.Age,
      EMail: users?.EMail,
      Profession: users?.Profession,
    };
    axios
      .put(`http://localhost:3001/updateUser/${id}`, updateUser)
      .then(() => {
        toast.success("Employee was updated successfully...");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <ToastContainer />
          <div className="bg-green-500 p-2">
            <h1 className="font-bold uppercase text-center text-white">
              Employee Dashboard
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center min-h-screen gap-2 cursor-pointer">
            <div className="bg-gray-100 border-2 border-black p-6 rounded-lg font-bold">
              <h1 className="underline text-center">Update Users</h1>
              <form
                onSubmit={(e) => handleUpdate(e)}
                className="flex flex-col gap-2"
              >
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter the Name"
                  className="p-2 border-2 border-black rounded-lg"
                  defaultValue={users?.Name}
                  onChange={(e) =>
                    updateUsers({ ...users, Name: e.target.value })
                  }
                  required
                />
                <label>Age</label>
                <input
                  type="number"
                  placeholder="Enter the Age"
                  className="p-2 border-2 border-black rounded-lg"
                  defaultValue={users?.Age}
                  onChange={(e) =>
                    updateUsers({ ...users, Age: e.target.value })
                  }
                  required
                />
                <label>E-Mail</label>
                <input
                  type="email"
                  placeholder="Enter the E-Mail"
                  className="p-2 border-2 border-black rounded-lg"
                  defaultValue={users?.EMail}
                  onChange={(e) =>
                    updateUsers({ ...users, EMail: e.target.value })
                  }
                  required
                />
                <label>Profession</label>
                <input
                  type="text"
                  placeholder="Enter the Profession"
                  className="p-2 border-2 border-black rounded-lg"
                  defaultValue={users?.Profession}
                  onChange={(e) =>
                    updateUsers({ ...users, Profession: e.target.value })
                  }
                  required
                />
                <button
                  type="submit"
                  className="p-2 bg-green-500 rounded-lg text-white"
                >
                  Update
                </button>
              </form>
            </div>
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
    </>
  );
}

export default UpdateUsers;
