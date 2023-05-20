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

    return (
        <div className="w-9/12 mx-auto">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {
                myToy.map(a => <div key={a._id} className="flex justify-between bg-base-100 shadow-xl mt-10 rounded-xl">
                    <img className="w-1/4 rounded-xl" src={a?.image} alt="Album" />
                    <div className="card-body">
                        <h2 className="card-title">{a?.name}</h2>
                        <p>Category: {a?.category}</p>
                        <p>Price: {a?.price}$</p>
                        <p>Quantity: {a?.quantity}</p>
                        <p>Rating: {a?.rating}</p>
                        <div className="flex flex-row justify-between">
                            <button className="btn btn-primary"><Link to={`/updateMyToy/${a._id}`}>Update</Link></button>
                            <button onClick={() => handleDelete(a._id)} className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>)
            }
            </div>

        </div>
    );
};

export default MyToys;