import Lottie from 'lottie-react';
import registrationLottie from '../../assets/lottie/lottie.json'
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { errorAlert } from '../../shared/alert';
import Socials from '../../shared/Socials';
import { Link } from 'react-router-dom';

const Login = () => {
    const { user, singinUser } = useAuth()
    const handleSignin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        singinUser(email, password)
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You have logged in",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => errorAlert(error.message))

    }
    return (
        <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
            <div className='md:flex justify-evenly items-center gap-10'>
                <div className='w-full max-w-3xl'>
                    <form onSubmit={handleSignin} className="space-y-4 font-body">
                        <h2 className="text-2xl font-bold mb-6 text-center font-heading">Log In</h2>
                        <div className='flex gap-2'>

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full"
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered w-full"
                                required
                                minLength={6}
                            />
                        </div>
                        <div className="flex justify-between items-center text-sm mt-1 px-1">
                            <Link to="/forgotPassword" className="text-blue-600 hover:underline">
                                Forgot Password?
                            </Link>
                            <p className="text-sm text-center mt-2">
                                Don't have an account? <Link to="/registration" className="text-blue-600 hover:underline font-medium">Register</Link>
                            </p>
                        </div>

                        <button type="submit" className="btn btn-primary w-full mt-2">
                            Login
                        </button>
                    </form>
                    <div>
                        <Socials></Socials>
                    </div>
                </div>
                <div className='md:text-center lg:text-right md:w-[500px] sm:pr-8'>
                    <Lottie animationData={registrationLottie}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Login;