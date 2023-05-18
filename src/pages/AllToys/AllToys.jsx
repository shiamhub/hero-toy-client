import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
    const data = useLoaderData();

    return (
        <div className="w-9/12 mx-auto">
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
                            data.map((a, i) => <tr key={a._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{a.name}</td>
                                <td>{a.sellerName || 'none'}</td>
                                <td>{a.category}</td>
                                <td>{a.quantity}</td>
                                <td>{a.price}</td>
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