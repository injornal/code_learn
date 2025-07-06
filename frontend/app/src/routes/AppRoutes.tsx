import { Routes, Route } from "react-router"
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"
import Profile from "../pages/Profile/Profile"
import Courses from "../pages/Courses/Courses"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/courses" element={<Courses />} />
        </Routes>
    )
}