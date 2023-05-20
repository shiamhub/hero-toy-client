import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
    const { user } = useContext(AuthContext);

    useTitle("Add A Toy");
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const name = form.name.value;
        const image = form.photoURL.value;
        const category = form.category.value;
        const price = parseFloat(form.price.value);
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        console.log({ email, sellerName, name, image, rating, quantity, category, price, description });

        const addAToy = {
            email, sellerName, name, image, rating, quantity, category, price, description
        }
        swal({
            title: "Good job!",
            text: "Add a toy successfully!",
            icon: "success",
            button: "OK!",
        })
            .then((ok) => {
                if (ok) {
                    fetch('https://assignment-11-server-alpha-seven.vercel.app/addToy', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addAToy)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);

                        })
                }

            })
    }

    return (
        <div className="bg-base-200">
            <form onSubmit={handleSubmit} className="card-body w-9/12 mx-auto">
                <div className="lg:flex gap-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellerName" defaultValue={user?.displayName} className="input input-bordered" required />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Photo URL</span>
                    </label>
                    <input type="url" name="photoURL" placeholder="photoURL" className="input input-bordered" required />

                </div>
                <div className="lg:flex gap-8">
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Toy Category</span>
                        </label>
                        <select name="category" className="select select-primary w-full">
                            <option>Avengers</option>
                            <option>Transformers</option>
                            <option>Star Wars</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Toy Price</span>
                        </label>
                        <input type="price" name="price" placeholder="price" className="input input-bordered" required />

                    </div>
                </div>
                <div className="lg:flex gap-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Toy Rating</span>
                        </label>
                        <input type="rating" name="rating" placeholder="rating" className="input input-bordered" required />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Toy Available Quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder="quantity" className="input input-bordered" required />

                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name="description" placeholder="description" className="textarea textarea-bordered textarea-md w-full" required ></textarea>

                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary" value="submit" />
                </div>

            </form>
        </div>
    );
};

export default AddToy;