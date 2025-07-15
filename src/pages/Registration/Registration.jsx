import Lottie from 'lottie-react';
import registrationLottie from '../../assets/lottie/lottie.json'
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { errorAlert } from '../../shared/alert';
import Socials from '../../shared/Socials';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
    const { user, createUser } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state || '/'
    const handleRegistration = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
        const imageURL = form.imageURL.value
        const user = { name, email, imageURL }
        if (password === confirmPassword) {
            createUser(email, password)
                .then(() => {
                    axios.post('http://localhost:5000/users', user)
                        .then(res => {
                            if(res.data.insertedId) {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "User has been Registered",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate(from)
                            }
                        }
                        )
                })
                .catch(error => errorAlert(error.message))
        } else {
            console.log('Passowrd and confirm password must be same')
        }
    }
    return (
        <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
            <div className="md:flex justify-evenly items-center gap-10">
                <div className="w-full max-w-3xl">
                    <form onSubmit={handleRegistration} className="space-y-4 font-body">
                        <h2 className="text-2xl font-bold mb-6 text-center font-heading">Create an Account</h2>

                        <div className="flex gap-2">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                className="input input-bordered w-full"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="flex gap-2">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered w-full"
                                required
                                minLength={6}
                            />

                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="input input-bordered w-full"
                                required
                                minLength={6}
                            />
                        </div>

                        <div>
                            <input
                                type="url"
                                name="imageURL"
                                placeholder="Provide Image URL"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="flex justify-between items-center text-sm mt-1 px-1">
                            <div></div>
                            <p className="text-sm text-center mt-2">
                                Already have an account? <Link to="/login" className="text-blue-600 hover:underline font-medium">Log In</Link>
                            </p>
                        </div>

                        <button type="submit" className="btn btn-primary w-full mt-4">
                            Register
                        </button>
                    </form>

                    <div className="mt-4">
                        <Socials />
                    </div>
                </div>

                <div className="md:text-center lg:text-right md:w-[500px] sm:pr-8">
                    <Lottie animationData={registrationLottie} />
                </div>
            </div>
        </div>

    );
};

export default Registration;