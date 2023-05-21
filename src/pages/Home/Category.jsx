import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import Gallery from './Gallery';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
const Category = () => {
  const [category, setCategory] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [show, setShow] = useState(false);

  const [totalToy, setTotalToy] = useState(0);
  const [number, setNumber] = useState(0);
  const [item] = useState(6);

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
    fetch(`https://assignment-11-server-alpha-seven.vercel.app/pageAllToys?page=${number}&limit=${item}`)
      .then((res) => res.json())
      .then((data) => {
        setAllCategory(data);
      });
  }, [number, item]);

  useEffect(() => {
    fetch('https://assignment-11-server-alpha-seven.vercel.app/totalToys')
      .then((res) => res.json())
      .then((data) => {
        setTotalToy(data.totalToys);
      })
  }, []);
  const totalPage = Math.ceil(totalToy / item);
  const pageNumbers = [...Array(totalPage).keys()];

  useEffect(() => {
    fetch('https://assignment-11-server-alpha-seven.vercel.app/allToys')
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
      })
  }, []);


  return (
    <div className='mt-16'>
      <Tabs>
        <TabList className="lg:flex gap-2 lg:gap-8 z-10">
          <Tab onClick={handleAllCategory}>All Toys</Tab>
          <Tab onClick={handleCategory}>Avengers</Tab>
          <Tab onClick={handleCategory}>Transformers</Tab>
          <Tab onClick={handleCategory}>Star Wars</Tab>
        </TabList>

        <TabPanel></TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8'>
            {
              category.map(a => <div key={a._id} className="lg:flex justify-between bg-base-100 shadow-xl mb-10 rounded-xl">
                <img className="lg:w-1/4 rounded-xl" src={a?.image} alt="Album" />
                <div className="card-body">
                  <h2 className="card-title">{a?.name}</h2>
                  <p>Category: {a?.category}</p>
                  <p>Price: {a?.price}$</p>
                  <p>Quantity: {a?.quantity}</p>
                  <div className="flex items-center gap-1 w-28">
                <p>{a?.rating}</p>
                <Rating className='' value={Math.fround(a?.rating)} readOnly />
              </div>                  <div className="flex flex-row justify-between">
                    <Link to={`/viewDetails/${a._id}`}><button className="btn btn-primary">View Details</button></Link>
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)
            }
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8'>
            {
              category.map(a => <div key={a._id} className="lg:flex justify-between bg-base-100 shadow-xl mb-10 rounded-xl">
                <img className="lg:w-1/4 rounded-xl" src={a?.image} alt="Album" />
                <div className="card-body">
                  <h2 className="card-title">{a?.name}</h2>
                  <p>Category: {a?.category}</p>
                  <p>Price: {a?.price}$</p>
                  <p>Quantity: {a?.quantity}</p>
                  <div className="flex items-center gap-1 w-28">
                <p>{a?.rating}</p>
                <Rating className='' value={Math.fround(a?.rating)} readOnly />
              </div>                  <div className="flex flex-row justify-between">
                    <Link to={`/viewDetails/${a._id}`}><button className="btn btn-primary">View Details</button></Link>
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)
            }
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8'>
            {
              category.map(a => <div key={a._id} className="lg:flex justify-between bg-base-100 shadow-xl mb-10 rounded-xl">
                <img className="lg:w-1/4 rounded-xl" src={a?.image} alt="Album" />
                <div className="card-body">
                  <h2 className="card-title">{a?.name}</h2>
                  <p>Category: {a?.category}</p>
                  <p>Price: {a?.price}$</p>
                  <p>Quantity: {a?.quantity}</p>
                  <div className="flex items-center gap-1 w-28">
                <p>{a?.rating}</p>
                <Rating className='' value={Math.fround(a?.rating)} readOnly />
              </div>                  <div className="flex flex-row justify-between">
                    <Link to={`/viewDetails/${a._id}`}><button className="btn btn-primary">View Details</button></Link>
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)
            }
          </div>
        </TabPanel>
      </Tabs>
      <div className={`grid grid-cols-1 lg:grid-cols-2 lg:gap-8 ${show ? 'hidden' : 'block'}`}>
        {
          allCategory.map(a => <div key={a._id} className="lg:flex justify-between bg-base-100 shadow-xl mb-10 rounded-xl">
            <img className="lg:w-1/4 rounded-xl" src={a?.image} alt="Album" />
            <div className="card-body">
              <h2 className="card-title">{a?.name}</h2>
              <p>Category: {a?.category}</p>
              <p>Price: {a?.price}$</p>
              <p>Quantity: {a?.quantity}</p>
              <div className="flex items-center gap-1 w-28">
                <p>{a?.rating}</p>
                <Rating className='' value={Math.fround(a?.rating)} readOnly />
              </div>
              <div className="flex gap-2 flex-row justify-between items-center">
                <Link to={`/viewDetails/${a._id}`}><button className="btn btn-primary">View Details</button></Link>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>)
        }
      </div>
      <div className={`flex gap-3 justify-center ${show ? 'hidden' : 'block'}`}>
        {
          pageNumbers.map(a => <button key={a} className={`btn ${number === a ? 'btn-primary' : 'btn-outline'}`} onClick={() => setNumber(a)}>{a + 1}</button>)
        }
      </div>

      <Gallery img={gallery}></Gallery>

    </div>
  );
};

export default Category;