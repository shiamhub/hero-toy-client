import { useRouteError } from "react-router-dom";
import img from './../../assets/images/404-error.png'
const ErrorPage = () => {
    const { error } = useRouteError();
    return (
        <div className="mt-3">
            <img className="w-5/12 flex mx-auto" src={img} alt="" />
            <h1 className="text-red text-center">Not Found</h1>
            <h1 className="text-red text-center">{error?.message}</h1>
        </div>
    );
};

export default ErrorPage;