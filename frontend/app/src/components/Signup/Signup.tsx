import styles from "./Signup.module.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Signup() {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    // sends user credentials to /api/signup.
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const response: Response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username, email: email, password: password })
            });

            if (!response.ok) {
                throw new Error('Signup failed');
            }

            navigate("/login");
        } catch (err: unknown) {
            console.error(err);
            setError("Signup failed. Please check your credentials.");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className={styles.signupContainer}>
            <div className={styles.signupCard}>
                <div className={styles.signupHeader}>
                    <h1 className={styles.signupTitle}>Create an Account</h1>
                    <p className={styles.signupSubtitle}>Sign up to get started</p>
                </div>
                <form className={styles.signupForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="username" className={styles.formLabel}>Username</label>
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className={`${styles.formInput} ${styles.inputWithIcon}`}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setUsername(event.target.value); }}
                                placeholder="Enter your username"
                                required />
                            <i className={`fa fa-user ${styles.inputIcon}`}></i>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>Email</label>
                        <div className={styles.inputGroup}>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className={`${styles.formInput} ${styles.inputWithIcon}`}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setEmail(event.target.value); }}
                                placeholder="Enter your email"
                                required />
                            <i className={`fa fa-envelope ${styles.inputIcon}`}></i>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.formLabel}>Password</label>
                        <div className={styles.inputGroup}>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className={`${styles.formInput} ${styles.inputWithIcon}`}
                                placeholder="Enter your password"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setPassword(event.target.value); }}
                                required />
                            <i className={`fa fa-lock ${styles.inputIcon}`}></i>
                        </div>
                    </div>
                    {error && (
                        <div className={styles.errorMessage}>{error}</div>
                    )}
                    <button type="submit" className={styles.submitButton} disabled={isLoading}>
                        {isLoading && <span className={styles.loadingSpinner}></span>}
                        {isLoading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>
                <div className={styles.divider}>
                    <span className={styles.dividerText}>or</span>
                </div>

                <div className={styles.socialLogin}>
                    <button className={styles.socialButton}>
                        <i className="fa fa-google"></i>
                        Continue with Google
                    </button>
                </div>
                <div className={styles.signupLink}>
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
            </div>
        </div>
    )
}