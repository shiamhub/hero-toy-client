import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        setError("");

        if(password.length < 6) {
            return setError('Password must be at least 6 characters');
        }
        else if(!/(?=.*[A-Z])/.test(password)) {
            return setError('Password must contain at least one uppercase letter');
        }
        else if(!/(?=.*[a-z])/.test(password)) {
            return setError('Password must contain at least one lowercase letter');
        }
        else if(!/(?=.*[0-9])/.test(password)) {
            return setError('Password must contain at least one number');
        }
        else if(!/(?=.*[!@#$%^&*])/.test(password)) {
            return setError('Password must contain at least one special character');
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                updateUserData(user, name, photo);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            })
    }
    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            })
            
    }

    return (
        <div className="w-4/12 mx-auto">
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="url" name="photo" placeholder="photo" className="input input-bordered" required />
                </div>
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
                    <input type="submit" className="btn btn-primary" value="Register" />
                </div>

            </form>
        </div>
    );
};

export default Register;