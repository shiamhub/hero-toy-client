import { FaFacebookSquare } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';
const Contacts = () => {
    return (
        <div className='bg-neutral my-16 rounded-xl py-16 grid lg:grid-cols-3 gap-10 lg:gap-0 justify-center items-center'>
            <div className='mx-auto'>
                <FaFacebookSquare className='text-4xl text-white mx-auto'></FaFacebookSquare>
                <div>
                    <h1 className='text-xl text-white'>Add Our Facebook Page</h1>
                </div>
            </div>
            <div className='flex items-center gap-3 mx-auto'>
                <BsFillTelephoneFill className='text-4xl text-white'></BsFillTelephoneFill>
                <div>
                    <h1 className='text-xl text-white'>Call Us</h1>
                    <h1 className='text-xl text-white'>+91 9876543210</h1>
                </div>
            </div>
            <div className='flex items-center gap-3 mx-auto'>
                <ImLocation2 className='text-4xl text-white'></ImLocation2>
                <div>
                    <h1 className='text-xl text-white'>Our Location</h1>
                    <h1 className='text-xl text-white'>Delhi, India</h1>
                </div>
            </div>
        </div>
    );
};

export default Contacts;