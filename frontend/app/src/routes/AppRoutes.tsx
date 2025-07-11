import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"
import Profile from "../pages/Profile/Profile"
import Courses from "../pages/Courses/Courses"
import Signup from "../pages/Signup/Signup"



export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/courses" element={<Courses />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}