import axios from 'axios';
import React, { useState } from 'react';
import { baseUrl } from '@/assets/js/constant';
import { setSecureCookie } from '@/assets/js/utils';


/**
 * @function Login
 * Handles the login functionality of the application.
 * @returns {React.ReactElement} The login form.
 */
export default function Login() {

    /**
     * The state of the login form data.
     * @type {object}
     */
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    /**
     * The state of the login form error.
     * @type {boolean}
     */
    const [errors, setErrors] = useState(false);

    /**
     * Handles the login form submission.
     * @param {React.FormEvent<HTMLFormElement>} e - The form event.
     */
    const handleSubmit = e => {
        e.preventDefault();

        // Send the login request to the API
        axios.post(`${baseUrl}login`, data)
            .then(response => setSecureCookie('token', response?.data?.device_token))
            .then(_ => window.location.reload())
            .catch(_ => setErrors(true));
    }

    return (
        <div className='min-h-[calc(100vh-85px)] flex items-center justify-center'>

            <form onSubmit={handleSubmit} className='w-[90%] sm:w-[500px] bg-black p-5 sm:p-10 rounded-[30px]'>

                <img src="/logo.svg" className='w-fit m-auto mb-10' alt="" />

                <h2 className='text-white font-bold text-2xl sm:text-3xl text-center mb-3 sm:mb-10'>Log in </h2>

                {
                    // Display the error message if the login fails
                    errors && <p className='text-[red] mb-3 capitalize font-medium text-lg'>Invalid email or password</p>
                }

                <label htmlFor="email" className={`${errors ? "err" : ""}`}>Email:</label>

                <input
                    type="email"
                    autoFocus
                    onChange={e => setData(perv => ({ ...perv, email: e.target.value }))}
                    id="email"
                    className={`${errors ? "err" : ""}`}
                    placeholder='Email'
                />

                <label htmlFor="email" className={`${errors ? "err" : ""}`}>Password:</label>

                <input
                    type="password"
                    onChange={e => setData(perv => ({ ...perv, password: e.target.value }))}
                    id="password"
                    className={`${errors ? "err" : ""}`}
                    placeholder='Password'
                />

                <button type='submit' className='bg-primary p-2 rounded-md px-10 font-medium mt-5 m-auto block'>Log in</button>

            </form>

        </div>
    )
}

