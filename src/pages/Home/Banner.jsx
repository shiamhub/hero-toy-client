import { Link } from 'react-router-dom';
import img from './../../assets/images/Bruce.webp';
import img3 from './../../assets/images/wp4181781.webp';
const Banner = () => {
    return (
        <div className='relative'>
            <img src={img3} alt="" />
            <div className='absolute top-1/4 lg:ml-12 ml-5'>
                <h1 className='lg:text-7xl text-xl text-white font-bold'>New Epic Toy</h1>
            </div>
            <div className='flex flex-col justify-center items-center absolute top-6 lg:right-1/4 right-12'>
                <img className='w-5/12 lg:w-3/4' src={img} alt="" />
                <button className='text-white btn btn-primary w-3/12 py-2 rounded-md bg-sky-500'><Link to={`/viewDetails/646798756536f26de66f9e85`}>View Details</Link></button>
            </div>
        </div>
    );
};

export default Banner;
