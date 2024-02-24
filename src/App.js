import "./App.css";
import Nav from "./Components/Admin-nav";
import Header from "./Components/Header";
import Teacher from "./Components/Teacher";
import AddNewTeacher from "./Components/AddNewTeacher";
import AssignClassTeacher from "./Components/AssignClassTeacher";
import SchoolIDCard from "./Components/SchoolIdCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SchoolIdCardForm from "./Components/SchoolIdCardForm";
import IdCardTemplate1 from "./Components/IDCardTemplate1";
import IdCardTemplate2 from "./Components/IDCardTemplate2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav />

        <Routes>
          <Route path="/" element={<Teacher />} />
          <Route path="/idcard" element={<SchoolIDCard />} />
          <Route path="/schoolidcardform/:id" element={<SchoolIdCardForm />} />

          <Route path="/template1" element={<IdCardTemplate1 />} />
          <Route path="/template2" element={<IdCardTemplate2 />} />
          <Route path="/addnewteacher" element={<AddNewTeacher />} />
          <Route path="/assignclassteacher" element={<AssignClassTeacher />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
