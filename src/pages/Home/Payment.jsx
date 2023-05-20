import { FaCcPaypal, FaCcApplePay, FaCcAmazonPay } from 'react-icons/fa';

const Payment = () => {
    return (
        <div>
            <h1 className="text-center mt-12 mb-6 lg:my-12 font-bold lg:text-5xl text-2xl">Available Payment By</h1>
            <div className='grid lg:grid-cols-3 gap-6 justify-center'>
                <div className='bg-base-300 p-10 rounded-xl'>
                    <FaCcPaypal className='text-7xl'></FaCcPaypal>
                    <h3 className='mb-4 font-medium text-xl'>Pay with Paypal</h3>
                    <p>In online transactions, the term Paypal typically refers to a brief description or identifier that is associated with a payment.</p>
                </div>
                <div className='bg-base-300 p-10 rounded-xl'>
                    <FaCcApplePay className='text-7xl'></FaCcApplePay>
                    <h3 className='mb-4 font-medium text-xl'>Pay with ApplePay</h3>
                    <p>In online transactions, the term ApplePay typically refers to a brief description or identifier that is associated with a payment.</p>
                </div>
                <div className='bg-base-300 p-10 rounded-xl'>
                    <FaCcAmazonPay className='text-7xl'></FaCcAmazonPay>
                    <h3 className='mb-4 font-medium text-xl'>Pay with AmazonPay</h3>
                    <p>In online transactions, the term AmazonPay typically refers to a brief description or identifier that is associated with a payment.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Payment;