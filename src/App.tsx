import { BrowserRouter as  Router, Routes, Navigate, Route, } from "react-router-dom"
import Layouts from "./components/layouts/Layouts"
import Home from "./pages/home/home"
import Jobs from "./pages/jobs/Jobs"
import Scholarship from "./pages/ScholarShip/SchoolarShip"
import Internship from "./pages/Internship/Internship"
import Mentorship from "./pages/MentorShip/Mentorship"
import Guide from "./components/footer/Guide/Guide"
import IntershipGuide from "./components/footer/Guide/IntershipGuide"
import CoverLetter from "./components/footer/Guide/CoverLetter"
import CvPage from "./components/footer/Guide/CvPage"
import SOP from "./components/footer/Guide/SOP"
import SkillsInternship from "./components/footer/Guide/SkillsInternship"
import AboutUs from "./components/footer/AboutUs"
import Terms from "./components/footer/Terms"
import Privacy from "./components/footer/Privacy"
import Contact_us from "./components/footer/Contact_us"

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
               <Route path="/Guide" element={<Layouts><Guide/></Layouts>} />
                <Route path="/CoverLetter" element={<Layouts><CoverLetter/></Layouts>} />
                 <Route path="/CvPage" element={<Layouts><CvPage/></Layouts>} />
                  <Route path="/SOP" element={<Layouts><SOP/></Layouts>} />
                   <Route path="/IntershipGuide" element={<Layouts><IntershipGuide/></Layouts>} />
                   <Route path="/SkillsInternship" element={<Layouts><SkillsInternship/></Layouts>} />
                   <Route path="/AboutUs" element={<Layouts><AboutUs/></Layouts>} />
                   <Route path="/Terms" element={<Layouts><Terms/></Layouts>} />
                   <Route path="/Privacy" element={<Layouts><Privacy/></Layouts>} />
                   <Route path="/Contact_us" element={<Layouts><Contact_us/></Layouts>} />

               
            <Route path="*" element={<Navigate to='/'/>}/>
          </Routes>
        </Router>
          
      </div>
       
    </>
  )
}

export default App
