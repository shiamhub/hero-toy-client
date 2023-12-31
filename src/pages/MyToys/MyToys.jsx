import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToy, setMyToy] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-11-server-alpha-seven.vercel.app/myToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, []);

    useTitle("My Toys");


    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this toy!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://assignment-11-server-alpha-seven.vercel.app/deleteToy/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal("Poof! Your toy has been deleted!", {
                                    icon: "success",
                                });
                            }
                            const remainingData = myToy.filter(a => a._id !== id);
                            setMyToy(remainingData);
                        })
                }
            });
    }

    const handleSortByAscending = () => {
        // const sortedData = myToy.sort((a, b) => a.price - b.price);
        // console.log(sortedData);
        // setMyToy(sortedData);
        fetch(`https://assignment-11-server-alpha-seven.vercel.app/myToysSortByAscending?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToy(data));
    }

    const handleSortByDescending = () => {
        fetch(`https://assignment-11-server-alpha-seven.vercel.app/myToysSortByDescending?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToy(data));
    }

    return (
        <div className="w-9/12 mx-auto mb-16">
            <div className="lg:flex gap-6 my-16">
                <button onClick={() => handleSortByDescending()} className="btn btn-primary mt-6 lg:mt-0">Sort By Price Ascending</button>
                <button onClick={() => handleSortByAscending()} className="btn btn-primary">Sort By Price Descending</button>
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
                            myToy?.map((a, i) => <tr key={a._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{a?.name}</td>
                                <td>{a?.sellerName || 'none'}</td>
                                <td>{a?.category}</td>
                                <td>{a?.quantity}</td>
                                <td>{a?.price}$</td>
                                <td className="text-center">
                                    <button className="btn btn-sm btn-primary"><Link to={`/updateMyToy/${a._id}`}>Update</Link></button>
                                    <button onClick={() => handleDelete(a._id)} className="btn btn-sm btn-primary ml-3">Delete</button>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;