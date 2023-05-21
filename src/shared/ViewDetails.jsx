import { useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


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
                                <div className="flex items-center gap-1 w-28">
                <p>{data?.rating}</p>
                <Rating className='' value={Math.fround(data?.rating)} readOnly />
              </div>                            </div>
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