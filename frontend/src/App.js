import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./pages/header/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import NoMatch from "./pages/noMatch/NoMatch"; 
import PostUser from "./pages/employee/PostUser"; // ✅ ADD THIS
import UpdateUser from "./pages/employee/UpdateUser"; // ✅ ADD THIS

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/employee" element={<PostUser />} />
        <Route path="/employee/:id" element={<UpdateUser />} />

         
      </Routes>
    </>
  );
}

export default App;
 