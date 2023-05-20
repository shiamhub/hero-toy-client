import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    const { googleLogin, login, user } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigation = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleWithGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setError("");

        login(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            })
    }

    useEffect(() => {
        if (user) {
            navigation(from, { replace: true });
        }
    }, [user])

    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <p className="text-red-600 my-4">{error}</p>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Login" />
                            </div>
                            <div className="divider">OR</div>
                            <p>New Account for <Link to="/register">Register</Link></p>
                        </form>
                        <button onClick={handleWithGoogleLogin} className="btn btn-outline mx-8 mb-10"><FcGoogle className="text-xl mr-3"></FcGoogle>Continue with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;