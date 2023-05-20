import { useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const ViewDetails = () => {
    const data = useLoaderData();
    console.log(data);

    useTitle("View Details");

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={data?.image} className="lg:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{data?.name}</h1>
                        <p className="py-6">{data?.description}</p>
                        <div className="flex justify-between">
                            <div className="space-y-2 text-xl font-medium">
                                <p>Category: {data?.category}</p>
                                <p>Price: {data?.price}$</p>
                                <p>Quantity: {data?.quantity}</p>
                                <p>Rating: {data?.rating}</p>
                            </div>
                            <div className="space-y-2 text-xl font-medium">
                                <p>Seller Name: {data?.sellerName || 'none'}</p>
                                <p>Seller Email: {data?.email || 'none'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;