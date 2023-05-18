import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
       fetch(`http://localhost:5000/myToys?email=${user?.email}`)
        .then(res => res.json())
        .then(datas => setData(datas))
    },[])

    return (
        <div>
            {
                data.map(a => <div key={a._id} className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={a.image} alt="Album" /></figure>
                <div className="card-body">
                  <h2 className="card-title">New album is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default MyToys;