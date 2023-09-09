import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import CreateUsers from "./CreateUsers";
import UpdateUsers from "./UpdateUsers";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />}></Route>
            <Route path="/createUser" element={<CreateUsers />}></Route>
            <Route path="/updateUser/:id" element={<UpdateUsers />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
