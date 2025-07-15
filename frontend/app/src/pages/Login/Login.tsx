import React from "react"
import LoginComponent from "../../components/Login/Login"

/**
 * @file Login.tsx
 * @summary This component serves as the page-level container for the LoginComponent.
 * It primarily acts as a wrapper to render the login form.
 * @module LoginPage
 */

/**
 * Login page component.
 * Renders the LoginComponent, which provides the user interface for user authentication.
 *
 * @returns {React.ReactElement} The Login page UI.
 */
const Login = (): React.ReactElement => {
    return (
        <LoginComponent />
    )
}

export default Login;