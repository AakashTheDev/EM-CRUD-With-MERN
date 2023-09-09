import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CreateUsers() {
  const navigate = useNavigate();

  const [users, setCreateUsers] = useState({
    Name: "",
    Age: 0,
    EMail: "",
    Profession: "",
  });

  const handleCreate = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/create", users)
      .then((res) => {
        toast.success("Employee was created successfully");
        setTimeout(() => {
          navigate("/");
        }, 1500);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
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
              <h1 className="underline text-center">Create Users</h1>
              <form
                onSubmit={(e) => handleCreate(e)}
                className="flex flex-col gap-2"
              >
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter the Name"
                  className="p-2 border-2 border-black rounded-lg"
                  value={users.Name}
                  onChange={(e) =>
                    setCreateUsers({ ...users, Name: e.target.value })
                  }
                  required
                />
                <label>Age</label>
                <input
                  type="number"
                  placeholder="Enter the Age"
                  className="p-2 border-2 border-black rounded-lg"
                  value={users.Age}
                  onChange={(e) =>
                    setCreateUsers({ ...users, Age: e.target.value })
                  }
                  required
                />
                <label>E-Mail</label>
                <input
                  type="email"
                  placeholder="Enter the E-Mail"
                  className="p-2 border-2 border-black rounded-lg"
                  value={users.EMail}
                  onChange={(e) =>
                    setCreateUsers({ ...users, EMail: e.target.value })
                  }
                  required
                />
                <label>Profession</label>
                <input
                  type="text"
                  placeholder="Enter the Profession"
                  className="p-2 border-2 border-black rounded-lg"
                  value={users.Profession}
                  onChange={(e) =>
                    setCreateUsers({ ...users, Profession: e.target.value })
                  }
                  required
                />
                <button
                  type="submit"
                  className="p-2 bg-green-500 rounded-lg text-white"
                >
                  Create
                </button>
              </form>
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
      </div>
    </>
  );
}

export default CreateUsers;
