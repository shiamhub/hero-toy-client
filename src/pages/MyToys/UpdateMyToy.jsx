import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateMyToy = () => {
    const data = useLoaderData();
    const id = data._id;
    console.log(id);
    console.log(data);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const price = parseFloat(form.price.value);
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateAToy = {
            price, quantity, description
        }
        console.log(updateAToy);
        fetch(`https://assignment-11-server-alpha-seven.vercel.app/updateMyToy/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateAToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                swal({
                    title: "Good job!",
                    text: "Update a toy successfully!",
                    icon: "success",
                    button: "OK!",
                })
            }
        })

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="w-9/12 mx-auto card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Price</span>
                    </label>
                    <input type="price" name="price" defaultValue={data.price} className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Available Quantity</span>
                    </label>
                    <input type="number" name="quantity" defaultValue={data.quantity} className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name="description" defaultValue={data.description} className="textarea textarea-bordered textarea-md w-full" required ></textarea>

                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary" value="submit" />
                </div>
            </form>
        </div>
    );
};

export default UpdateMyToy;