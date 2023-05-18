import { useLoaderData } from "react-router-dom";

const AllToys = () => {
    const data = useLoaderData();
    console.log(data);

    const handleDetails = (id) => {
        console.log(id);
    }

    return (
        <div className="w-9/12 mx-auto">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
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
                                <td>{a.category}</td>
                                <td>{a.quantity}</td>
                                <td>{a.price}</td>
                                <td className="text-center"><label onClick={() => handleDetails(a._id)} htmlFor="my-modal-3" className="btn btn-sm">View Details</label></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>


            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">You have been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>

        </div>
    );
};

export default AllToys;