import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const handleToast = () => {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        toast('View Details')
    }

    if (user) {
        return children;
    }
    if (loading) {
        return <progress className="progress w-56 flex mx-auto my-28"></progress>
    }

    return <Navigate to="/login" onClick={handleToast()} state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;