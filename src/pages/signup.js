import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './signup.css';

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        firstName: '',
        lastName: '',
        aadharNo: '',
        password: '',
        email: '',
        dob: '',
        phone: '',
        address: '',
        aadharImage: null
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo(prevState => ({ ...prevState, [name]: value }));
    };

    const handleFileChange = (e) => {
        setSignupInfo(prevState => ({ ...prevState, aadharImage: e.target.files[0] }));
    };

    const handleSignup = (e) => {
        e.preventDefault();
        const { firstName, lastName, aadharNo, password, email, dob, phone, address, aadharImage } = signupInfo;

        if (!firstName || !lastName || !aadharNo || !password || !email || !dob || !phone || !address || !aadharImage) {
            toast.error('All fields are required');
            return;
        }

        toast.success('Signup successful! Redirecting...');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    return (
        <div className='container'>
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' name='firstName' placeholder='Enter First Name...' value={signupInfo.firstName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' name='lastName' placeholder='Enter Last Name...' value={signupInfo.lastName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='aadharNo'>Aadhar Number</label>
                    <input type='text' name='aadharNo' placeholder='Enter Aadhar Number...' value={signupInfo.aadharNo} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' placeholder='Enter Password...' value={signupInfo.password} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' placeholder='Enter Email...' value={signupInfo.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='dob'>Date of Birth</label>
                    <input type='date' name='dob' value={signupInfo.dob} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type='text' name='phone' placeholder='Enter Phone Number...' value={signupInfo.phone} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='address'>Address</label>
                    <input type='text' name='address' placeholder='Enter Address...' value={signupInfo.address} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='aadharImage'>Upload Aadhar</label>
                    <input type='file' name='aadharImage' onChange={handleFileChange} />
                </div>
                <button type='submit'>Signup</button>
                <span>Already have an account? <Link to="/login">Login</Link></span>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Signup;
