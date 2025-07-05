import { Routes, Route } from "react-router"
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}