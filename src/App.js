import "./App.css";
import Nav from "./Components/Admin-nav";
import Header from "./Components/Header";
import Teacher from "./Components/Teacher";
import AddNewTeacher from "./Components/AddNewTeacher";
import AssignClassTeacher from "./Components/AssignClassTeacher";
import SchoolIDCard from "./Components/SchoolIdCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import schoolIdData from "./Utils/schoolIdData";
import SchoolIDCardPreview from "./Components/SchoolIDCardPreview";
import SchoolIdCardForm from "./Components/SchoolIdCardForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav />

        <Routes>
          <Route path="/" element={<Teacher />} />
          <Route path="/idcard" element={<SchoolIDCard />} />
          <Route path="/schoolidcardform" element={<SchoolIdCardForm />} />
          <Route
            path="/schoolidcardpreview"
            element={<SchoolIDCardPreview studentData={schoolIdData} />}
          />
          <Route path="/addnewteacher" element={<AddNewTeacher />} />
          <Route path="/assignclassteacher" element={<AssignClassTeacher />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
