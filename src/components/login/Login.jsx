import { useState } from "react";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [err, setErr] = useState({});

    const handleLogin = () => {
        let errors = {};

        // Kiểm tra email
        if (!email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email address is invalid.";
        }

        // Kiểm tra mật khẩu
        if (!pass) {
            errors.pass = "Password is required.";
        } else if (pass.length < 6) {
            errors.pass = "Password must be at least 6 characters.";
        }

        // Cập nhật trạng thái lỗi
        setErr(errors);

        // Nếu không có lỗi, thực hiện đăng nhập
        if (Object.keys(errors).length === 0) {
            // Gửi dữ liệu đến máy chủ (giả sử có API endpoint /login)
            // fetch('/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({ email, pass })
            // })
            // .then(response => response.json())
            // .then(data => {
            //     // Xử lý phản hồi từ máy chủ
            //     console.log(data);
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            // });
            alert("Logged in successfully! Data has not been processed yet")
            console.log("Login successful with email:", email, "and password:", pass);
        }
    };

    return (
        <section className="logins">
            <div className="login_wrapper">
                <h2>Log in now for great values</h2>
                <div className="input_wrapper">
                    <label htmlFor="email">Username</label>
                    <input 
                        type="text" 
                        id="email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className={`err ${err.email ? "showErr" : ""}`}>{err.email}</p>
                </div>
                <div className="input_wrapper">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter your password" 
                        value={pass} 
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <p className={`err ${err.pass ? "showErr" : ""}`}>{err.pass}</p>
                </div>
                <div className="login-option">
                    <div className="remember-me">
                        <input type="checkbox" id="remember" name="remember" />
                        <label htmlFor="remember">Remember Me</label>
                    </div>
                    <div className="forgot-password">
                        <a href="#">Forgot Password?</a>
                    </div>
                </div>
                <button className="login-btn" onClick={handleLogin}>Log in</button>
                <a href="#">Don't have an account?</a>
            </div>
        </section>
    );
};

export default Login;
