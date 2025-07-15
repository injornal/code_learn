import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"
import Profile from "../pages/Profile/Profile"
import Courses from "../pages/Courses/Courses"
import Signup from "../pages/Signup/Signup"



/**
 * @file AppRoutes.tsx
 * @summary This component defines the routing configuration for the application.
 * It uses React Router to map URL paths to specific React components (pages).
 * @module AppRoutes
 */

/**
 * AppRoutes component.
 * Configures the application's routes using React Router's `Routes` and `Route` components.
 * Each `Route` maps a URL path to a specific page component.
 *
 * @returns {React.ReactElement} The routing configuration for the application.
 */
const AppRoutes = (): React.ReactElement => {
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

export default AppRoutes;