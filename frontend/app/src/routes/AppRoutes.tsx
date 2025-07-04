import { Routes, Route } from "react-router"
import Login from "../pages/Login/LoginWindow"
import HelloWorld from "../pages/HelloWorld"

export default function AppRoutes () {
    return <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HelloWorld />}/>
    </Routes>
}