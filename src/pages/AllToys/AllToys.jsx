import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
    const data = useLoaderData();
    const [toys, setToys] = useState(data);
    const [searchText, setSearchText] = useState("");

    useTitle("All Toys");

    const handleSearch = () => {
        console.log(searchText);
        fetch(`https://assignment-11-server-alpha-seven.vercel.app/searchAllToys/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }
    const handleSort = () => [
        fetch('https://assignment-11-server-alpha-seven.vercel.app/allToysSortByPrice')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);
            })
    ]


    return (
        <div className="w-9/12 mx-auto">
            <div className="flex justify-between items-center my-12">
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search…" className="input input-bordered" />
                        <button onClick={() => handleSearch()} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <button onClick={() => handleSort()} className="btn btn-primary">Price Sort</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Sub-category</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th className="text-center">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys?.map((a, i) => <tr key={a._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{a?.name}</td>
                                <td>{a?.sellerName || 'none'}</td>
                                <td>{a?.category}</td>
                                <td>{a?.quantity}</td>
                                <td>{a?.price}</td>
                                <td className="text-center"><Link to={`/viewDetails/${a._id}`}><button className="btn btn-sm">View Details</button></Link></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;