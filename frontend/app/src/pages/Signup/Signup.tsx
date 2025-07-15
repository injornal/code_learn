import SignupComponent from "../../components/Signup/Signup"

/**
 * @file Signup.tsx
 * @summary This component serves as the page-level container for the SignupComponent.
 * It primarily acts as a wrapper to render the signup form.
 * @module SignupPage
 */

/**
 * Signup page component.
 * Renders the SignupComponent, which provides the user interface for new user registration.
 *
 * @returns {React.ReactElement} The Signup page UI.
 */
const Signup = (): React.ReactElement => {
    return <SignupComponent />
}

export default Signup; 