import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
const Category = () => {
  const [category, setCategory] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [show, setShow] = useState(false);

  const handleCategory = (e) => {
    fetch(`https://assignment-11-server-alpha-seven.vercel.app/allToy/${e.target.innerText}`)
      .then((res) => res.json())
      .then((data) => setCategory(data));

    setShow(true);
  }
  const handleAllCategory = () => {
    setShow(false);
  }

  useEffect(() => {
    fetch('https://assignment-11-server-alpha-seven.vercel.app/allToys')
      .then((res) => res.json())
      .then((data) => setAllCategory(data));
  }, [])

  return (
    <div>
      <Tabs>
        <TabList className="flex gap-8">
          <Tab onClick={handleAllCategory}>All Toys</Tab>
          <Tab onClick={handleCategory}>Avengers</Tab>
          <Tab onClick={handleCategory}>Transformers</Tab>
          <Tab onClick={handleCategory}>Star Wars</Tab>
        </TabList>

        <TabPanel></TabPanel>

        <TabPanel>
          <div >
            {
              category.map(a => <div key={a._id} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={a.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)
            }
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            {
              category.map(a => <div key={a._id} className="card card-side bg-base-100 shadow-xl">
                <figure><img src={a.image} alt="Movie" /></figure>
                <div className="card-body">
                  <h2 className="card-title">New movie is released!</h2>
                  <p>Click the button to watch on Jetflix app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>)
            }
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            {
              category.map(a => <div key={a._id} className="card lg:card-side bg-base-100 shadow-xl">
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
        </TabPanel>
      </Tabs>
      <div className={`grid grid-cols-2 lg:grid-cols-5 gap-8 ${show ? 'hidden' : 'block'}`}>
        {
          allCategory.map(a => <div data-aos="flip-left" data-aos-duration="2000" key={a._id} className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={a.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{a.name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <Link to={`/viewDetails/${a._id}`}><button className="btn btn-primary">View Details</button></Link>
              </div>
            </div>
          </div>)

        }
      </div>
    </div>
  );
};

export default Category;