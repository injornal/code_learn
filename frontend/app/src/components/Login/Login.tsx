import styles from "./Login.module.css";
import React, { useState } from "react"
import { useStore } from "../../store";
import { useNavigate } from "react-router";

export default function Login(): React.ReactElement {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const setIsAuthenticated = useStore((state) => state.setIsAuthenticated);
    const navigate = useNavigate();

    // sends username and password to /api/login.
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        setIsLoading(true);
        setError("");
        
        try {
            const response: Response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username, password: password })
            });
            
            if (!response.ok) {
                throw new Error('Login failed');
            }
            
            setIsAuthenticated(true);
            navigate("/");
        } catch (err: unknown) {
            console.error(err);
            setError("Login failed. Please check your credentials.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <div className={styles.loginHeader}>
                    <h1 className={styles.loginTitle}>Welcome Back</h1>
                    <p className={styles.loginSubtitle}>Sign in to your account</p>
                </div>
                
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="username" className={styles.formLabel}>Username</label>
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={username}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setUsername(event.target.value); }}
                                className={`${styles.formInput} ${styles.inputWithIcon}`}
                                placeholder="Enter your username"
                                required
                            />
                            <i className={`fa fa-user ${styles.inputIcon}`}></i>
                        </div>
                    </div>
                    
                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.formLabel}>Password</label>
                        <div className={styles.inputGroup}>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setPassword(event.target.value); }}
                                className={`${styles.formInput} ${styles.inputWithIcon}`}
                                placeholder="Enter your password"
                                required
                            />
                            <i className={`fa fa-lock ${styles.inputIcon}`}></i>
                        </div>
                    </div>
                    
                    {error && (
                        <div className={styles.errorMessage}>
                            {error}
                        </div>
                    )}
                    
                    <button 
                        type="submit" 
                        className={styles.submitButton}
                        disabled={isLoading}
                    >
                        {isLoading && <span className={styles.loadingSpinner}></span>}
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>
                
                <div className={styles.forgotPassword}>
                    <a href="#" className={styles.forgotPasswordLink}>Forgot your password?</a>
                </div>
                
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
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                </div>
            </div>
        </div>
    );
}