import { Link } from 'react-router-dom';
import img from './../../assets/images/Bruce.webp';
import img3 from './../../assets/images/wp4181781.webp';
const Banner = () => {
    return (
        <div className='relative'>
            <img src={img3} alt="" />
            <div className='absolute top-1/4 lg:ml-12 ml-5'>
                <h1 className='lg:text-7xl text-xl text-white font-bold'>Hero Toy</h1>
                <h6 className='text-white mt-0 lg:mt-4 w-1/2'>The Robot is an action-packed toy that brings excitement and fun to children aged 5-10.</h6>
            </div>
            <div className='flex flex-col justify-center items-center absolute top-6 lg:right-1/4 right-12'>
                <img className='w-5/12 lg:w-3/4 hover:w-1/2 lg:hover:w-10/12' src={img} alt="" />
            </div>
            <button className='text-white btn right-2/4 lg:right-[600px] btn-primary top-3/4 lg:bottom-1/4 absolute w-2/12'><Link to={`/viewDetails/646798756536f26de66f9e85`}>View Details</Link></button>

        </div>
    );
};

export default Banner;
