import img from './../../assets/images/R (8).jpg';
import img2 from './../../assets/images/joho.jpg';
import img3 from './../../assets/images/L-Espadon-photo6016e655229ee.jpg';
import img4 from './../../assets/images/OIP (7).jpg';

import { BsHandThumbsUpFill } from 'react-icons/bs';

const Review = () => {
    return (
        <div>
            <h1 className="text-center mt-12 mb-6 lg:my-12 font-bold lg:text-5xl text-2xl">Some Toy Review</h1>
            <div  data-aos="fade-right" data-aos-duration="1000" className='bg-blue-200 rounded-xl p-8 lg:w-5/12 flex flex-col justify-end ml-auto text-right mb-6 lg:mb-0'>
                <div className="avatar justify-end">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className='flex items-center gap-3 justify-end'>
                    <p className='flex items-center'><BsHandThumbsUpFill className='text-orange-500'></BsHandThumbsUpFill>5k</p>
                    <h1 className='text-xl font-medium'>Donald Trump</h1>
                </div>
                <p>21/05/2022</p>
                <h1 className='mt-6 text-xl font-medium'>Name of the Toy: Super Robot</h1>
                <p>The RoboBuddy is an exciting robot toy that offers a wide range of features and interactivity for children and adults. With its sleek design, advanced capabilities, and educational value, it provides hours of entertainment.</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className='bg-blue-200 rounded-xl p-8 lg:w-5/12 mb-6 lg:mb-0'>
                <div className="avatar justify-end">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <h1 className='text-xl font-medium'>John Cena</h1>
                    <p className='flex items-center'><BsHandThumbsUpFill className='text-orange-500'></BsHandThumbsUpFill>5k</p>
                </div>
                <p>21/05/2022</p>
                <h1 className='mt-6 text-xl font-medium'>Name of the Toy: Super Robot</h1>
                <p>The RoboBuddy is an exciting robot toy that offers a wide range of features and interactivity for children and adults. With its sleek design, advanced capabilities, and educational value, it provides hours of entertainment.</p>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" className='bg-blue-200 rounded-xl p-8 lg:w-5/12 flex flex-col justify-end ml-auto text-right mb-6 lg:mb-0'>
                <div className="avatar justify-end">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div className='flex items-center gap-3 justify-end'>
                <p className='flex items-center'><BsHandThumbsUpFill className='text-orange-500'></BsHandThumbsUpFill>5k</p>
                    <h1 className='text-xl font-medium'>John Deu</h1>
                </div>
                <p>21/05/2022</p>
                <h1 className='mt-6 text-xl font-medium'>Name of the Toy: Super Robot</h1>
                <p>The RoboBuddy is an exciting robot toy that offers a wide range of features and interactivity for children and adults. With its sleek design, advanced capabilities, and educational value, it provides hours of entertainment.</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className='bg-blue-200 rounded-xl p-8 lg:w-5/12'>
                <div className="avatar justify-end">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img4} alt="" />
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <h1 className='text-xl font-medium'>Rock</h1>
                    <p className='flex items-center'><BsHandThumbsUpFill className='text-orange-500'></BsHandThumbsUpFill>5k</p>
                </div>
                <p>21/05/2022</p>
                <h1 className='mt-6 text-xl font-medium'>Name of the Toy: Super Robot</h1>
                <p>The RoboBuddy is an exciting robot toy that offers a wide range of features and interactivity for children and adults. With its sleek design, advanced capabilities, and educational value, it provides hours of entertainment.</p>
            </div>
        </div>
    );
};

export default Review;