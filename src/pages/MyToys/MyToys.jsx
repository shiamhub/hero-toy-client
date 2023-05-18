import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToy, setMyToy] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, []);

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
                    fetch(`http://localhost:5000/deleteToy/${id}`, {
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
                } else {
                    swal("Your toy is safe!");
                }
            });
    }

    return (
        <div className="w-9/12 mx-auto">
            {
                myToy.map(a => <div key={a._id} className="flex justify-between bg-base-100 shadow-xl mt-10 rounded-xl">
                    <img className="w-1/4 rounded-xl" src={a.image} alt="Album" />
                    <div className="card-body">
                        <h2 className="card-title">{a.name}</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="flex flex-row justify-end">
                            <button className="btn btn-primary">Update</button>
                            <button onClick={() => handleDelete(a._id)} className="btn btn-primary ml-6">Delete</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default MyToys;