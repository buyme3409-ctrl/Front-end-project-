import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


function Login() {
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(username, password);

        if (success) {
            navigate("/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div
            className="container d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <form onSubmit={handleSubmit} className="border p-4 shadow rounded bg-light">
                    <h3 className="mb-4 text-center text-primary">Login</h3>

                    {/* Username */}
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label mb-3">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>

                    {/* Hint */}
                    <div className="mt-3 text-center text-secondary small">
                        Demo credentials: <br />
                        <strong>Username:</strong> admin | <strong>Password:</strong> 1234
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;