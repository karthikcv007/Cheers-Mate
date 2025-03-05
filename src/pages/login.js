import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling

import './login.css';

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        AadharNo: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo(prevState => ({ ...prevState, [name]: value }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const { AadharNo, password } = loginInfo;

        if (!AadharNo || !password) {
            toast.error('Aadhar Number and password are required'); // ✅ Toast error notification
            return;
        }

        // Simulate successful login for frontend testing
        toast.success('Login successful! Redirecting...'); // ✅ Toast success notification
        setTimeout(() => {
            navigate('/home');
        }, 1000);
    };

    return (
        <div className='container'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor='AadharNo'>Aadhar Number</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='AadharNo'
                        placeholder='Enter your Aadhar Number...'
                        value={loginInfo.AadharNo}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                        value={loginInfo.password}
                    />
                </div>
                <button type='submit'>Login</button>
                <span>Don't have an account? <Link to="/signup">Signup</Link></span>
            </form>

            {/* ✅ Ensure ToastContainer is inside the component */}
            <ToastContainer />
        </div>
    );
}

export default Login;
