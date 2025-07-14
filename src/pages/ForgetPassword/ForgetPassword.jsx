import useAuth from '../../hooks/useAuth';
import { errorAlert } from '../../shared/alert';
import Swal from 'sweetalert2';

const ForgetPassword = () => {
    const { forgetPassword } = useAuth()
    const handleForgetPassword = e => {
        e.preventDefault()
        const email = e.target.email.value
        forgetPassword(email)
            .then(() => Swal.fire({
                position: "center",
                icon: "success",
                title: "Email has been Send",
                showConfirmButton: false,
                timer: 1500
            }))
            .catch(error => errorAlert(error.message))
    }
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center">Reset Your Password</h2>
            <form onSubmit={handleForgetPassword} className="space-y-4">
                <input
                    type="email"
                    name='email'
                    className="input input-bordered w-full"
                    placeholder="Enter your email"
                    required
                />
                <button type="submit" className="btn btn-primary w-full">Send Reset Email</button>
            </form>
        </div>
    );
};

export default ForgetPassword;