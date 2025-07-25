import React, { useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { errorAlert } from './alert';
import useAuth from '../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const Socials = () => {
    const { googleSignin } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state || '/'
    const handleGoogle = () => {
        googleSignin()
            .then((res) => {
                // console.log(res)
                navigate(from)
            })
            .catch(error => errorAlert(error.message))
    }

    const handleFacebook = () => {
        alert('Under Development')
    }
    return (
        <div className="mt-6">
            <div className="divider">or continue with</div>

            <div className="flex flex-col md:flex-row gap-4 mt-4 items-center">
                <button
                    onClick={handleGoogle}
                    className="btn btn-outline w-1/2 flex items-center gap-2"
                >
                    <FaGoogle className="text-red-500" /> Google
                </button>

                <button
                    onClick={handleFacebook}
                    className="btn btn-outline w-1/2 flex items-center gap-2"
                >
                    <FaFacebook className="text-blue-600" /> Facebook
                </button>
            </div>
        </div>
    );
};

export default Socials;