import { BrowserRouter as  Router, Routes, Navigate, Route, } from "react-router-dom"
import Layouts from "./components/layouts/Layouts"
import Home from "./pages/home/home"
import Jobs from "./pages/jobs/Jobs"
import Scholarship from "./pages/ScholarShip/SchoolarShip"
import Internship from "./pages/Internship/Internship"
import Mentorship from "./pages/MentorShip/Mentorship"

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Layouts><Home/></Layouts>} />
             <Route path="/jobs" element={<Layouts><Jobs/></Layouts>} />
             <Route path="/SchoolarShip" element={<Layouts><Scholarship/></Layouts>} />
              <Route path="/Internship" element={<Layouts><Internship/></Layouts>} />
              <Route path="/Mentorship" element={<Layouts><Mentorship/></Layouts>} />


            <Route path="*" element={<Navigate to='/'/>}/>
          </Routes>
        </Router>
          
      </div>
       
    </>
  )
}

export default App
