import React, { useState } from "react"
import styles from './Login.module.css'; // Import your CSS Module


export default function Login(): React.ReactElement {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    // sends username and passowrd to /api/login.
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        console.log(username, password);
        try {
            const response: Response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username, password: password })
            });

            console.log(response);
        } catch (err: unknown) {   
            console.error(err);
        }
    };

    return (
        <>
            <div className={styles.loginWindow}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setUsername(event.target.value); }}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setPassword(event.target.value); }}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}