import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[3fr_1fr_1fr] gap-6 lg:gap-14 my-10 mt-40 text-sm'>
        
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="Company Logo" />
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae, magni dignissimos blanditiis nam praesentium?</p>
        </div>
        
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-222-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - ALL Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
